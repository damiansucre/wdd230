const exercisesLink = document.querySelector('#exercises-link');
const cards = document.querySelector('.card-1');
const baseURL = "https://damiansucre.github.io/wdd230/";

const linksURL = "https://damiansucre.github.io/wdd230/data/links.json";

async function getLinks(){
    try{
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayLinks(data.weeks);
        }else{
            throw error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}

const displayLinks = (weeks) =>{

    let card= document.createElement('section');
    
    weeks.forEach ((contWeek) => {
        let weekName = document.createElement('h2');
        weekName.textContent = `${contWeek.week}: `;
        card.appendChild(weekName);
        
        contWeek.links.forEach(function (nameLink) {
            let linkName = document.createElement('a');
            linkName.textContent =`|${nameLink.title}`;
            linkName.setAttribute('href', nameLink.url);
            card.appendChild(linkName);
        });
    });
    cards.appendChild(card);
}

getLinks();