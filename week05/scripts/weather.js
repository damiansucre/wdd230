const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url ='https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&appid=4473a14fe77c4a9fba6d398101963181&units=imperial';


async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
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
    console.log(iconsrc);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();