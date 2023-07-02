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
		result.textContent=`15 USD `;	
	}
	else if (selected =="silver"){
		result.textContent=`30 USD`;
	}
	else if (selected =="gold"){
		result.textContent=`50 USD, 2x1 GYMPASS, Freepass to all events`;
	}
	else if (selected =="nonProfit"){
		result.textContent=`Free`;
	}
}
radioBtns.forEach(radioBtns =>{
	radioBtns.addEventListener("change", findSelected);
});
