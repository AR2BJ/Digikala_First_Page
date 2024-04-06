let searchbar = document.querySelector(
	"div.wrapper > div.header > div.content_1 > div.contents > div.content_1 > div.container > div.searchbar"
);

let input = document.querySelector(
	"div.wrapper > div.header > div.content_1 > div.contents > div.content_1 > div.container > div.searchbar > input"
);

let li = document.querySelectorAll(
	"div.wrapper > div.header > div.content_2 > ul > li"
);

let contain = document.querySelector(
	"div.wrapper > div.header > div.content_2 > ul > li:nth-of-type(1) > div.contain"
);

let submenu_li = document.querySelectorAll(
	"div.wrapper > div.header > div.content_2 > ul > li:nth-of-type(1) > div.contain > div.menu > ul > li"
);

let underline = document.querySelector(
	"div.wrapper > div.header > div.content_2 > ul > div.underline"
);

let loc = document.querySelector(
	"div.wrapper > div.header > div.content_2 > div.location > a"
);

let tooltip = document.querySelector(
	"div.wrapper > div.header > div.content_2 > div.location > div.tooltip"
);

let content = document.querySelectorAll(
	"div.wrapper > div.header > div.content_2 > ul > li:nth-of-type(1) > div.contain > div.menu > ul > li > div.submenu > div.content"
);

input.addEventListener("focus", () => {
	searchbar.children[2].style.backgroundColor = "#19bfd3";
});

input.addEventListener("blur", () => {
	searchbar.children[2].removeAttribute("style");
});

/*

	Changing the color of the input indicator and creating a line under it.

*/

li[0].addEventListener("mouseenter", () => {
	underline.style =
		"width: 145.047px; transform: translate3d(848.953px, 0px, 0px);";
});

li[1].addEventListener("mouseenter", () => {
	underline.style =
		"width: 122.906px; transform: translate3d(726.047px, 0px, 0px);";
});

li[2].addEventListener("mouseenter", () => {
	underline.style =
		"width: 101.641px; transform: translate3d(618.375px, 0px, 0px);";
});

li[3].addEventListener("mouseenter", () => {
	underline.style =
		"width: 101.031px; transform: translate3d(517.375px, 0px, 0px);";
});

li[4].addEventListener("mouseenter", () => {
	underline.style =
		"width: 120.875px; transform: translate3d(390.5px, 0px, 0px);";
});

li[5].addEventListener("mouseenter", () => {
	underline.style =
		"width: 159.875px; transform: translate3d(225.625px, 0px, 0px);";
});

li[6].addEventListener("mouseenter", () => {
	underline.style =
		"width: 89.3125px; transform: translate3d(131.312px, 0px, 0px);";
});

li[7].addEventListener("mouseenter", () => {
	underline.style =
		"width: 131.391px; transform: translate3d(-0.078125px, 0px, 0px);";
});

li.forEach((elem) => {
	elem.addEventListener("mouseleave", () => {
		underline.style.width = "0";
	});
});


/*

	Setting and placing the right line under the menus when the mouse goes over them and is removed from them.

*/


loc.addEventListener("mouseenter", () => {
	tooltip.style.display = "block";
});

loc.addEventListener("mouseleave", () => {
	tooltip.removeAttribute("style");
});

/*

	Setting the description (tooltip) of the city selection section.

*/

submenu_li.forEach((elem, index) => {
	elem.addEventListener("mouseenter", () => {
		submenu_li.forEach((elems) => {
			elems.removeAttribute("style");
			elems.children[0].removeAttribute("style");
			elems.children[2].removeAttribute("style");
			contain.removeAttribute("style");
		});
		elem.style = "background-color: #fff;color: #ef394e;";
		elem.children[2].style.display = "flex";
		contain.style.width = `${elem.children[2].clientWidth + 200}px`;
		if (index !== 0) {
			submenu_li[0].style =
				"color: #3f4064; border-bottom: 1px solid transparent; border-top: 1px solid transparent; background-color: unset;";
			submenu_li[0].children[2].style.display = "none";
		} else {
			submenu_li[0].removeAttribute("style");
			submenu_li[0].children[2].removeAttribute("style");
		}
	});
	elem.addEventListener("mouseleave", () => {
		content[index].scrollTop = 0;
	});
});


/*

	When we are in the first menu and the sub-menu (mega menu) is opened, the content of the opposite box should be changed and include a series of links and titles. When hovering over each item of the corresponding size, the box facing them is assigned and the color of the menus changes. Also, the first case has been seen as default, and going from it and back to it has also been checked. At the end, when the items become crystal (remove the mouse), the box facing them scrolls to its highest position.

*/