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

/* const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits); */


/*Week 04 Team Activity*/

/* const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame); */

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Password is not the same!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

//console.log(rangevalue)
// RANGE event listener
//range.addEventListener('change', displayRatingValue);
//range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

//weather

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url ='https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&appid=4473a14fe77c4a9fba6d398101963181&units=imperial';


async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        }else{
            throw error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    //console.log(iconsrc);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();