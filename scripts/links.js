const exercisesLink = document.querySelector('#exercises-link');
const baseURL = "https://damiansucre.github.io/wdd230/";

const linksURL = "https://damiansucre.github.io/wdd230/data/links.json";

async function getLinks(){
    try{
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayLinks(data);
        }else{
            throw error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}

function displayLinks(data){
    exercisesLink.innerHTML = `${data.weeks[0].week}`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    console.log(iconsrc);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.textContent = `${desc}`;
}

getLinks();