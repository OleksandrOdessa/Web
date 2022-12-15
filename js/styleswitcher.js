
window.addEventListener("load", windowLoad);

function windowLoad() {
	// HTML
	const htmlBlock = document.documentElement;

	// Отримуємо збережену тему
	const saveUserTheme = localStorage.getItem('user-theme');

	// Зміна теми по кліку
	const themeButton = document.querySelector('.page__theme');
	const resetButton = document.querySelector('.page__reset');
	if (themeButton) {
		themeButton.addEventListener("click", function (e) {
			resetButton.classList.add('active');
			changeTheme(true);
		});
	}
	if (resetButton) {
		resetButton.addEventListener("click", function (e) {
			resetButton.classList.remove('active');
			localStorage.setItem('user-theme', '');
		});
	}

	// Функція додавання класу теми
	function setThemeClass() {
		if (saveUserTheme) {
			htmlBlock.classList.add(saveUserTheme)
			resetButton.classList.add('active');
		} else {
			htmlBlock.classList.add(userTheme);
		}
	}
	// Додаємо клас теми
	setThemeClass();

	// Функція зміни теми
	function changeTheme(saveTheme = false) {
		let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
		let newTheme;

		if (currentTheme === 'light') {
			newTheme = 'dark';
		} else if (currentTheme === 'dark') {
			newTheme = 'light';
		}
		htmlBlock.classList.remove(currentTheme);
		htmlBlock.classList.add(newTheme);
		saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
	}
}
/* ================ toggle style switcher =================== */
const styleswitcherToggle = document.querySelector(".style-switcher-toggler");
styleswitcherToggle.addEventListener("click", () => {
	document.querySelector(".style-switcher").classList.toggle("style-switcher__open");
})
//? При нажатии на любое место закрывается меню
const styleswitcherToggles = document.querySelector(".page");
styleswitcherToggles.addEventListener("click", () => {
	document.querySelector(".style-switcher").classList.remove("style-switcher__open");
})
//? При выборе цвета закрывается меню
/* const styleswitcherToggl = document.querySelector(".colors");
styleswitcherToggl.addEventListener("click", () => {
	document.querySelector(".style-switcher").classList.remove("style-switcher__open");
}) */
// hide style - switcher on scroll 
window.addEventListener("scroll", () => {
	if (document.querySelector(".style-switcher").classList.contains("style-switcher__open")) {
		document.querySelector(".style-switcher").classList.remove("style-switcher__open");
	}
})

/* ================ theme colors =================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
	alternateStyles.forEach((style) => {
		if (color === style.getAttribute("title")) {
			style.removeAttribute("disabled");
		}
		else {
			style.setAttribute("disabled", "true");
		}
	})
}






