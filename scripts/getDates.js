const options = {year:'numeric'};
document.getElementById('current-year').textContent = new Date().toLocaleDateString('en-US',options);

/* const date = {weekday:'long', day:'numeric', month:'long', year:'numeric'};
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US',date); */

document.getElementById('current-date').textContent=(document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const modeButton = document.querySelector("#mode");
const main = document.querySelector("header");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#153243";
		main.style.color = "#B4B8AB";
		modeButton.textContent = "☑️";
	}
});
