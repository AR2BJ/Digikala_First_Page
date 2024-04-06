let show = document.querySelector(
	"div.wrapper > div.footer > div.contents > div.content6 > div.content1 > div.show > a"
);

let text = document.querySelector(
	"div.wrapper > div.footer > div.contents > div.content6 > div.content1 > div.text"
);

let comeup = document.querySelector(
	"div.wrapper > div.footer > div.contents > div.content1 > button"
);

let email = document.querySelector(
	"div.wrapper > div.footer > div.contents > div.content4 > div.item4 > div.email> div.form > form > input[type='email']"
);

let submit = document.querySelector(
	"div.wrapper > div.footer > div.contents > div.content4 > div.item4 > div.email> div.form > form > input[type='submit']"
);

let verify = document.querySelector(
	"div.wrapper > div.footer > div.contents > div.content4 > div.item4 > div.email> div.form > p.vrify"
);

let headset = document.querySelector("div.wrapper > div.headset");
let support = document.querySelector("div.wrapper > div.support");
let back_svg = document.querySelector(
	"div.wrapper > div.support > div.head > a"
);

show.addEventListener("click", () => {
	text.classList.toggle("showing");
	if (text.style.height === "auto" && show.children[0].innerText === "بستن") {
		text.removeAttribute("style");
		show.children[0].innerText = "مشاهده بیشتر";
	} else {
		text.style.height = "auto";
		show.children[0].innerText = "بستن";
	}
});

/* 
	By clicking on the read more link in the footer section of the 
	Digikala div, the content automatically increases and the link 
	changes the text (from view more to close).
*/

comeup.addEventListener("click", () => {
	window.scrollTo(0, 0);
});

/*

	By clicking the back to top button, the page will scroll to the starting point.

*/

email.addEventListener("input", () => {
	if (
		String(email.value).includes(".com") === false &&
		String(email.value).includes(".co") === false &&
		email.value !== ""
	) {
		verify.innerText = "پست الکترونیک وارد شده درست نیست";
		submit.removeAttribute("style");
	} else if (email.value === "") {
		verify.innerText = "اینجا را خالی نگذارید";
		submit.removeAttribute("style");
	} else if (
		String(email.value).includes(".com") ||
		String(email.value).includes(".co")
	) {
		verify.innerText = "";
		submit.style =
			"background-color:#ef4056; border: 1px solid #ef4056; cursor: pointer;";
	} else {
		verify.innerText = "";
		submit.removeAttribute("style");
	}
});

/*

	By typing your email in the corresponding box in the footer, if it ends with .co or .com, the color of the registration button will change from gray to red and you are ready to register.If the box is empty, the message "Do not leave this empty" will be displayed to the user, and if the email entered is not valid, the message "The email entered is not correct" will be displayed.

*/

headset.addEventListener("click", () => {
	if (headset.children[0].children[0].classList[1] === "fa-headset") {
		headset.children[0].children[0].classList.replace("fa-headset", "fa-xmark");
		support.style.display = "flex";
	} else {
		headset.children[0].children[0].classList.replace("fa-xmark", "fa-headset");
		support.removeAttribute("style");
	}
});

/*

	Change the icon of the online support panel button.

*/

back_svg.addEventListener("click", () => {
	support.style.display = "none";
	headset.children[0].children[0].classList.replace("fa-xmark", "fa-headset");
});

/*

	Function of the back button of the online support panel.

*/