const options = {year:'numeric'};
document.getElementById('current-year').textContent = new Date().toLocaleDateString('en-US',options);

document.getElementById('current-date').textContent=(document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



const msToDays = 84600000;

const theDateToday = new Date();

const todayElement = document.querySelector(".msg");

// processing
const msg = Date.now();


if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
	
}

