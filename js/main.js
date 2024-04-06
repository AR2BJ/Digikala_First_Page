let li1 = document.querySelector(
	"div.wrapper > div.header > div.content_2 > ul > li:nth-of-type(1)"
);
let bakdrop = document.querySelector("div.wrapper > div.backdrop");
let header = document.querySelector("div.wrapper > div.header");

let scrollPos = 0;

li1.addEventListener("mouseenter", () => {
	bakdrop.style = "visibility: visible; opacity: 1;";
	document.body.classList.add("stop-scrolling", "scroll");
	header.style.paddingRight = "8px";
});

li1.addEventListener("mouseleave", () => {
	bakdrop.removeAttribute("style");
	document.body.classList.remove("stop-scrolling");
	header.removeAttribute("style");
});

/*

	When the first menu is hovered, a black Blu-ray screen is placed behind it and over other elements.

*/

window.addEventListener("scroll", () => {
	if (
		document.body.getBoundingClientRect().top > scrollPos ||
		window.scrollY < 173
	) {
		header.children[2].removeAttribute("style");
		header.removeAttribute("style");
	} else {
		header.children[2].style = "transform: translateY(-100%);";
		header.style = "height: 132px; transition: all 0.3s ease-out;";
	}
	scrollPos = document.body.getBoundingClientRect().top;
});


/*

	By scrolling the page, if we move up, the menus are seen and if we move down, they disappear. 
	It also happens from the 173rd place in the height of the page.

*/