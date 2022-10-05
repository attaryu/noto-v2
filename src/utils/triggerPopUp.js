import check from "../assets/icon/accept.png";
import remove from "../assets/icon/remove.png";

import textLanguage from "./textLanguage";

export default function triggerPopUp(heading, newText, condition) {
	const text = textLanguage[localStorage.getItem("LANGUAGE") || "id"].popUp;

	const popUp = document.querySelector(".pop-up");
	const popUpText = document.querySelector(".pop-up__text");

	let filteringText = "";
	let filteringHeading = "";

	switch (heading) {
		case "login":
			filteringHeading = condition ? text.loginFail : text.loginSuccess;
			break;
		case "register":
			filteringHeading = condition
				? text.registerFail
				: text.registerSuccess;
			break;
		default:
			filteringHeading = "Error";
	}

	if (condition) {
		switch (newText) {
			case '"email" must be a valid email':
				filteringText = text.invalidEmail;
				break;
			case "Email not found":
				filteringText = text.emailNotRegister;
				break;
			case "Password is wrong":
				filteringText = text.wrongPassword;
				break;
			case "Email already use":
				filteringText = text.emailUse;
				break;
			default:
				popUpText.classList.add("hidden");
		}

		popUpText.classList.remove("hidden");
	} else {
		popUpText.classList.add("hidden");
	}

	popUpText.textContent = filteringText;
	document.querySelector(".pop-up__image").src = condition ? remove : check;
	document.querySelector(".pop-up__heading").textContent = filteringHeading;

	popUp.classList.remove("hidden");

	setTimeout(() => {
		popUp.classList.add("grid");
	}, 5);
}
