/*Script for JSON Directory Page*/

const cards = document.querySelector('.grid');
const spotlights = document.querySelector('.spotlight');
const baseURL = "https://damiansucre.github.io/wdd230/chamber/";
const membersURL = "https://damiansucre.github.io/wdd230/chamber/data/members.json";

async function getMembers(){
    try{
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayMembers(data.companies);
            displaySpotlight(data.companies);
        }else{
            throw error(await response.text());
        }
    }
    catch (error){
        //console.log(error);
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
		image.setAttribute('alt', `${companie.name}`);
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

/*On the home page use your JSON data source of members to supply two to three 
'spotlight' advertisements for the chamber members who have silver or gold membership levels only.*/

async function getMembersSpotlights(){
    try{
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displaySpotlight(data.companies);
        }else{
            throw error(await response.text());
        }
    }
    catch (error){
        //console.log(error);
    }
}

const displaySpotlight = (companies)=>{
    function randomFiles(datos){
        return datos[Math.floor(Math.random()*datos.length)]
    }
    let arrayNames = [];
    
    companies.forEach((companie) => {

        if((companie.membership=="GOLD") || (companie.membership=="SILVER")){
            let arrayDatos=[]
            arrayDatos.push(companie.name);
            arrayDatos.push(companie.image);
            arrayDatos.push(companie.address);
            arrayDatos.push(companie.phone);
            arrayDatos.push(companie.membership);
            arrayDatos.push(companie.url);
            arrayNames.push(arrayDatos);
        }
        
    });
    arrayNames.sort(() => Math.random()-0.5);
    /* for(i=0; i<3; i++ ){
        
    }*/
     
     arrayNames.forEach((companie) => {
        let spotlight= document.createElement('section');
        let name = document.createElement('h2');
		let image = document.createElement('img');
        let address = document.createElement('h3');
        let phone = document.createElement('h3');
		let membership = document.createElement('h3');
		let url = document.createElement('a');       

        name.textContent = `${companie[0]}`;
        address.textContent = `Address: ${companie[2]}`;
        phone.textContent = `Phone: ${companie[3]}`;
		url.textContent = `${companie[5]}`;
		url.setAttribute('href', companie[5]);
		membership.textContent = `Membership: ${companie[4]}`;
        image.setAttribute('src', companie[1]);
        image.setAttribute('loading', 'lazy');
		image.setAttribute('alt', `${companie[0]}`);
    
        spotlight.appendChild(name);
		spotlight.appendChild(image);
        spotlight.appendChild(address);
        spotlight.appendChild(phone);
		spotlight.appendChild(url);
		spotlight.appendChild(membership);
        spotlights.appendChild(spotlight);
        });

     //console.log(arrayNames);

   /*  valor=3;
    arrayNames.forEach(function(valor)  {
        
        console.log(randomFiles(valor));
    }); */
}
getMembersSpotlights();

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