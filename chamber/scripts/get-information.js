const options = {year:'numeric'};
document.getElementById('current-year').textContent = new Date().toLocaleDateString('en-US',options);

document.getElementById('current-date').textContent=(document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


/*Using localStorage to store the latest visit date by the client, display one of three possible 
messages about the time between page visits in the sidebar content area.
If this is the user's first visit, display "Welcome! Let us know if you have any questions.".
If the amount of time between visits is less than a day, display "Back so soon! Awesome!".
Otherwise, display the number of days in a message like this: "You last visited n days ago.", 
where n is the actual, whole number of days between visits. If the number of days is 1, then change the language to "day" not "days".*/

/* const msToDays = 84600000;

const theDateToday = new Date();

const todayElement = document.querySelector(".msg");

// processing
const msg = Date.now();


if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
	
} */

/* const visitsDisplay = document.querySelector(".visits");

const theDateToday = new Date();


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
	const lastVisited = localStorage.getItem('dayVisited');
	let daysLast = 
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem('dayVisited', theDateToday); */


/*script for form*/

let radioBtns = document.querySelectorAll("input[name='level']");
let result = document.getElementById("result");
let findSelected = () =>{
	let selected =document.querySelector("input[name='level']:checked").value;
	if (selected == "bronze"){
		result.textContent=`15 USD 5 Freepass per year for events`;	
	}
	else if (selected =="silver"){
		result.textContent=`30 USD, 10 Freepass per year for events`;
	}
	else if (selected =="gold"){
		result.textContent=`50 USD, 2x1 GYMPASS, Freepass to all events`;
	}
	else if (selected =="nonProfit"){
		result.textContent=`Free, All the information about our events`;
	}
}
radioBtns.forEach(radioBtns =>{
	radioBtns.addEventListener("change", findSelected);
});

//Weather data
const currentTemp = document.querySelector('#current-temp');
//const weatherIcon = document.querySelector('#weather-icon');
const weatherIcon = document.querySelector('figure');
const captionDesc = document.querySelector('figcaption');
const currentHumidity =document.querySelector('.current-humidity');
const currentWind =document.querySelector('.current-wind');

const currentTempDay1 = document.querySelector('.temp-day1-value');
const currentTempDay2 = document.querySelector('.temp-day2-value');
const currentTempDay3 = document.querySelector('.temp-day3-value');
//const weatherIconDay1 = document.querySelector('#day1-icon');
const weatherIconDay1 = document.querySelector('.image-weather1');
const weatherIconDay2 = document.querySelector('.image-weather2');
const weatherIconDay3 = document.querySelector('.image-weather3');
const url ='https://api.openweathermap.org/data/2.5/weather?lat=-34.65&lon=-58.55&appid=4473a14fe77c4a9fba6d398101963181&units=imperial';
const urlDays = 'https://api.openweathermap.org/data/2.5/forecast?lat=-34.65&lon=-58.55&appid=4473a14fe77c4a9fba6d398101963181&units=imperial';

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
	let image = document.createElement('img');
	image.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
	weatherIcon.appendChild(image);
    currentTemp.innerHTML = `${data.main.temp} &deg;F`;
    //const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    //console.log(iconsrc);
    //weatherIcon.setAttribute('src', iconsrc);
    //weatherIcon.setAttribute('src', iconsrc);
    captionDesc.textContent = `${desc}`;
	currentHumidity.innerHTML = `Humidity ${data.main.humidity}%`;
	currentWind.innerHTML = `Wind Speed: ${data.wind.speed}km/h`;
}

async function apiFetchDaily(){
    try{
		const response = await fetch(urlDays);
		if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResultsDaily(data);
        }else{
            throw error(await response.text());
        }
    }
    catch (error){
        //console.log(error);
    }
}

function displayResultsDaily(data){
	let image1 = document.createElement('img');
	image1.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`);
	weatherIconDay1.appendChild(image1);
	let image2 = document.createElement('img');
	image2.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`);
	weatherIconDay2.appendChild(image2);
	let image3 = document.createElement('img');
	image3.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`);
	weatherIconDay3.appendChild(image3);
    currentTempDay1.innerHTML = `${data.list[1].main.temp} &deg;F`;
	currentTempDay2.innerHTML = `${data.list[8].main.temp} &deg;F`;
	currentTempDay3.innerHTML = `${data.list[16].main.temp} &deg;F`;
    //const iconsrcday1 = `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`;
	const iconsrcday2 = `https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`;
	const iconsrcday3 = `https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`;
    //let desc = data.weather[0].description;
    //console.log(iconsrcday1);
    //weatherIconDay1.setAttribute('src', iconsrcday1);
    weatherIconDay2.setAttribute('src', iconsrcday2);
	weatherIconDay3.setAttribute('src', iconsrcday3);
    //captionDesc.textContent = `${desc}`;
	//currentHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
	//currentWind.innerHTML = `Wind Speed: ${data.wind.speed}km/h`;
}

const d = new Date();
const weekday = ["Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"];

	function checkDay(day){
		if(day +d.getDay() >6){
			return day +d.getDay()-7;
		}
		else{
			return day +d.getDay();
		}
	}

for (i=0;i<4;i++){
	document.getElementById("day"+(i+1)).innerHTML = weekday[checkDay(i)];
}

apiFetch();
apiFetchDaily();

//Home page Banner

var date = new Date();
	day=date.getDay()+1;
	switch(day){
		case 1:
			day='sunday';
			break;
		case 2:
			day='monday';
			break;
		case 3:
			day='tuesday';
			break;
		case 4:
			day= 'wednesday';
			break;
		case 5:
			day= 'thursday';
			break;
		case 6:
			day= 'friday';
			break;
		case 7:
			day= 'saturday';
			break;
	}
//console.log(day);

	if (day=="monday" || day=="tuesday" || day=="wednesday") {
		document.getElementById("banner").style.display="block";
	} else {
		document.getElementById("banner").style.display="none";
	}

document.querySelector(".banner-close").addEventListener("click", function (){
	this.closest("#banner").style.display ="none";
})