const temp = document.querySelector("#temp");
const desc = document.querySelector("#desc");
const forecastContainer = document.querySelector("#forecast");

const spotlightContainer = document.querySelector("#spotlight-container");

const lat = 6.52;
const lon = 3.38;

const apiKey = "909e320d5d40368fcb8a86910798e391";
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const membersUrl = "data/members.json";


async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) throw new Error("Weather fetch failed");

        const data = await response.json();

        temp.textContent = data.list[0].main.temp.toFixed(1);
        desc.textContent = capitalize(data.list[0].weather[0].description);

        const days = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);

        forecastContainer.innerHTML = "";

        days.forEach(day => {
            const date = new Date(day.dt_txt);
            const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

            const p = document.createElement("p");
            p.textContent = `${dayName}: ${day.main.temp.toFixed(1)}°C`;

            forecastContainer.appendChild(p);
        });

    } catch (error) {
        console.error("Weather error:", error);
    }
}

async function getSpotlights() {
    try {
        const response = await fetch(membersUrl);
        if (!response.ok) throw new Error("Members fetch failed");

        const data = await response.json();

        const filtered = data.members.filter(
            m => m.membershipLevel === 3 || m.membershipLevel === 2
        );

        const random = filtered
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

        displaySpotlights(random);

    } catch (error) {
        console.error("Spotlight error:", error);
    }
}


function displaySpotlights(members) {
    spotlightContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><strong>${member.membership} Member</strong></p>
            <a href="${member.websiteUrl}" target="_blank">Visit Website</a>
        `;

        spotlightContainer.appendChild(card);
    });
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

getWeather();
getSpotlights();