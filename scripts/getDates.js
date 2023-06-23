const options = {year:'numeric'};
document.getElementById('current-year').textContent = new Date().toLocaleDateString('en-US',options);

/* const date = {weekday:'long', day:'numeric', month:'long', year:'numeric'};
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US',date); */

document.getElementById('current-date').textContent=(document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const hero = document.querySelector('.hero');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	hero.classList.toggle('open');
});


const modeButton = document.querySelector("#mode");
const main = document.querySelector('header');
const main2 = document.querySelector('nav');

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main2.style.background = "#000";
		main.style.color = "#fff";
		main2.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#153243";
		main2.style.background = "#153243";
		main.style.color = "#B4B8AB";
		main2.style.color = "#B4B8AB";
		modeButton.textContent = "☑️";
	}
});

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
