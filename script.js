/**
 * Remove no-js class from the html
 * Reference: https://stackoverflow.com/questions/4665748/define-css-if-javascript-is-not-enabled
 */
document.documentElement.classList.remove("no-js");

console.log(
	"%cHi there! Welcome to the console. I invite you to check out my code which you can also find on github. I would be happy to get some feedback or hear about new opportunities! Feel free to send me an email at laurie.limsam@gmail.com",
	"font-size: 16px"
);

/************* Color Mode **************/
// Reference: https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode

const STORAGE_KEY = "user-color-scheme";
const COLOR_MODE_KEY = "--color-mode";
const modeToggleButton = document.getElementById("modeToggleButton");
const modeToggleText = document.getElementById("modeToggleText");
const modeStatus = document.getElementById("modeStatus");

/**
 * Pass in a custom prop key and this function will return its
 * computed value.
 */
const getCSSCustomProp = (propKey) => {
	let response = getComputedStyle(document.documentElement).getPropertyValue(
		propKey
	);

	// Tidy up the string if there’s something to work with
	if (response.length) {
		response = response.replace(/\'|"/g, "").trim();
	}

	// Return the string response by default
	return response;
};

/**
 * Takes either a passed settings ('light'|'dark') or grabs that from localStorage.
 * If it can’t find the setting in either, it tries to load the CSS color mode,
 * controlled by the media query
 */
const applySetting = (passedSetting) => {
	let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);

	if (currentSetting) {
		document.documentElement.setAttribute(
			"data-user-color-scheme",
			currentSetting
		);
		setButtonLabelAndStatus(currentSetting);
	} else {
		setButtonLabelAndStatus(getCSSCustomProp(COLOR_MODE_KEY));
	}
};

/**
 * Get’s the current setting > reverses it > stores it
 */
const toggleSetting = () => {
	let currentSetting = localStorage.getItem(STORAGE_KEY);

	switch (currentSetting) {
		case null:
			currentSetting =
				getCSSCustomProp(COLOR_MODE_KEY) === "dark" ? "light" : "dark";
			break;
		case "light":
			currentSetting = "dark";
			break;
		case "dark":
			currentSetting = "light";
			break;
	}

	localStorage.setItem(STORAGE_KEY, currentSetting);

	return currentSetting;
};

/**
 * A shared method for setting the button text label and visually hidden status element
 */
const setButtonLabelAndStatus = (currentSetting) => {
	modeToggleText.innerText = `Enable ${
		currentSetting === "dark" ? "light" : "dark"
	} mode`;
	modeStatus.innerText = `Color mode is now "${currentSetting}"`;
};

/**
 * Clicking the button runs the apply setting method which grabs its parameter
 * from the toggle setting method.
 */
modeToggleButton.addEventListener("click", (evt) => {
	evt.preventDefault();

	applySetting(toggleSetting());
});

applySetting();