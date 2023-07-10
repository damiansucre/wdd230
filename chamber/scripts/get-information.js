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

/*Script for JSON Directory Page*/

const cards = document.querySelector('.grid');
const baseURL = "https://damiansucre.github.io/wdd230/chamber/";
const membersURL = "https://damiansucre.github.io/wdd230/chamber/data/members.json";

async function getMembers(){
    try{
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayMembers(data.companies);
        }else{
            throw error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}

const displayMembers = (companies)=>{
    companies.forEach((companie) => {
        let card= document.createElement('section');
        let name = document.createElement('h2');
		let image = document.createElement('img');
        let address = document.createElement('h3');
        let phone = document.createElement('h3');
		let membership = document.createElement('h3');
		let url = document.createElement('a');
       

        name.textContent = `${companie.name}`;
        address.textContent = `Address: ${companie.address}`;
        phone.textContent = `Phone: ${companie.phone}`;
		url.textContent = `${companie.url}`;
		url.setAttribute('href', companie.url);
		membership.textContent = `Membership: ${companie.membership}`;
        image.setAttribute('src', companie.image);
        image.setAttribute('loading', 'lazy');
        //image.setAttribute('width', '340');
        //image.setAttribute('height', '440');

        card.appendChild(name);
		card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
		card.appendChild(url);
		card.appendChild(membership);
       
        cards.appendChild(card);
    });
}

getMembers();

//Let the user toggle between a "grid" type view of member cards or a simple, one-column list of members

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
