const apiKey = "f0c6fdf7fb4ae1e04936d2b70720a8e4";

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherInfo").innerHTML = `<p>City not found!</p>`;
            return;
        }

        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherInfo").innerHTML = `<p>Failed to load weather data.</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;

    document.getElementById("weatherInfo").innerHTML = `
        <h2>${name}</h2>
        <img src="${icon}" alt="${description}">
        <p>Temperature: ${temperature}°C</p>
        <p>${description.toUpperCase()}</p>
    `;
}