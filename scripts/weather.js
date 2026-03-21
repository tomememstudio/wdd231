// scripts/weather.mjs
const tempSpan = document.querySelector('#current-temp');
const iconImg = document.querySelector('#weather-icon');
const descFig = document.querySelector('#weather-desc');

// Trier, Germany coordinates
const lat = 49.75;
const lon = 6.63;

// OpenWeatherMap API URL
const apiKey = '909e320d5d40368fcb8a86910798e391';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // debug
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(weatherData) {
    tempSpan.textContent = weatherData.main.temp.toFixed(1);
    const iconCode = weatherData.weather[0].icon;
    const desc = weatherData.weather[0].description;
    iconImg.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    iconImg.alt = desc;
    descFig.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}

// call the function
apiFetch();