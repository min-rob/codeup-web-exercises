import { keys } from "./keys.js";
import { getForecast } from "../api/openweather.js";
import { createMap, getCoordinates, getAddress } from "../api/mapbox.js";

const MAPBOX_API_KEY = keys.mapBox;
let sessionToken = null;
let selectedSuggestion = {};
let userCoord = [];

const generateSessionToken = () => {
    return Math.random().toString(36).substring(7);
};

const fetchSuggestions = async (searchText, token) => {
    searchText = encodeURIComponent(searchText);
    const url = `https://api.mapbox.com/search/searchbox/v1/suggest?q={${searchText}}&session_token=${token}&access_token=${MAPBOX_API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.suggestions;
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
};

const saveSuggestionClick = (suggestion) => {
    selectedSuggestion = suggestion;
    return selectedSuggestion;
};

const searchBar = document.querySelector("input[type='search']");
const suggestionList = document.querySelector("#suggestions-list");

const handleSearchSuggestion = (callback) => {
    searchBar.addEventListener("keyup", async (e) => {
        const userInput = e.target.value.toLowerCase();
        suggestionList.innerHTML = "";

        if (userInput.length > 3) {
            try {
                if (!sessionToken) {
                    sessionToken = generateSessionToken();
                }

                const suggestions = await fetchSuggestions(
                    userInput,
                    sessionToken
                );

                for (let suggestion of suggestions) {
                    const li = document.createElement("li");
                    li.classList.add("suggestion");
                    li.textContent = suggestion.name;
                    li.addEventListener("click", async (e) => {
                        // Call the function with the suggestion object
                        saveSuggestionClick(suggestion);
                        console.log("Returned suggestion:", suggestion);
                        callback(suggestion);
                        suggestionList.innerHTML = "";
                    });
                    suggestionList.appendChild(li);
                }
            } catch (error) {
                console.error("Error fetching suggestions:", error);
            }
        }
    });
};

const handleSearch = async (callback) => {
    const form = document.querySelector("#search-form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const searchValue = searchBar.value;
        console.log("Search value:", searchValue);
        const searchCoords = await getCoordinates(searchValue);
        const searchAddress = await getAddress(searchCoords);
        suggestionList.innerHTML = "";
        console.log("search address:", searchAddress);
        callback(searchAddress); // Pass the result to the callback function
    });
};

const userLocation = (callback) => {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
        // Prompt user for permission to access their location
        navigator.geolocation.getCurrentPosition(
            // Success callback function
            (position) => {
                // Get the user's latitude and longitude coordinates
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                userCoord.push(lng, lat);
                callback(userCoord);
                console.log("Current location of user:", userCoord);
            },
            // Error callback function
            (error) => {
                // Handle errors, e.g. user denied location sharing permissions
                console.error("Error getting user location:", error);
            }
        );
    } else {
        // Geolocation is not supported by the browser
        console.error("Geolocation is not supported by this browser.");
    }
};

const setLocation = async (address = [-77.60706, 38.78828]) => {
    const newAddress = await getAddress(address);
    console.log("User location", newAddress);
    const city = newAddress.features.find((feature) =>
        feature.place_type.includes("place")
    ).text;
    const state = newAddress.features.find((feature) =>
        feature.place_type.includes("region")
    ).text;

    const locationText = document.querySelector("#user-location");
    locationText.textContent = `${city}, ${state}`;
    const forecastLocation = document.querySelector("#forecast-location");
    forecastLocation.textContent = `5 Day forecast: ${city}, ${state}`;
};

const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const formattedTime = `Time: ${hours}:${
        minutes < 10 ? "0" : ""
    }${minutes} ${ampm}`;

    document.querySelector("#time").innerText = formattedTime;
};

const weatherForecast = async (coordinates) => {
    const forecast = await getForecast(coordinates[1], coordinates[0]);
    return forecast;
};

const dateFormatter = (dateTime) => {
    const oldDate = new Date(dateTime * 1000);
    const date = new Date(parseFloat(dateTime) * 1000);
    const currentDate = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dayOfWeek = date.toLocaleDateString("en-US", {
        weekday: "long",
    });
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.getFullYear();

    const oldDateDay = oldDate.getDate();
    const currentDateDay = currentDate.getDate();

    let formattedDate = `${dayOfWeek} ${month} ${day}, ${year}`;

    if (oldDateDay === currentDateDay) {
        formattedDate = "Today";
    }
    return formattedDate;
};

const createWeatherCard = (forecast) => {
    let { weather, temp, humidity, wind_speed, pressure, dateTime, maxTemp } =
        forecast;
    let imgUrl = "";

    weather = forecast.weather[0].main;
    temp = Math.trunc(forecast.temp.day);
    maxTemp = Math.trunc(forecast.temp.max);
    humidity = forecast.humidity;
    wind_speed = forecast.wind_speed;
    pressure = forecast.pressure;
    dateTime = forecast.dt;
    const newDateTime = dateFormatter(dateTime);

    switch (weather) {
        case "Clouds":
            imgUrl = "./weatherbox_assets/img/cloud.png";
            break;
        case "Rain":
            imgUrl = "./weatherbox_assets/img/rainy.png";
            break;
        case "Clear":
            imgUrl = "./weatherbox_assets/img/sun.png";
            break;
        case "Snow":
            imgUrl = "./weatherbox_assets/img/snowy.png";
            break;
        case "Thunderstorm":
            imgUrl = "./weatherbox_assets/img/storm.png";
            break;
        case "windy":
            imgUrl = "./weatherbox_assets/img/windy.png";
            break;
        default:
            break;
    }

    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("weather-card");
    card.innerHTML = `
            <div
            class="card-head d-flex justify-content-between"
        >
            <p><strong>${newDateTime}</strong></p>
        </div>
        <div class="card-body">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <h1 class="temp">${temp}°C</h1>
                <img
                    src= ${imgUrl}
                    height="125"
                    width="125"
                />
                <h2>${weather}</h2>
            </div>
        </div>
        <div class="card-footer">
            <ul>
                <li>
                    <span>Humidity: ${humidity}</span>
                </li>
                <li>
                    <span>Wind speed: ${wind_speed} Mph</span>
                </li>
                <li><span>Pressure: ${pressure}</span></li>
                <li><span>Hi: ${maxTemp}°</span></li>
            </ul>
        </div>`;
    return card;
};

const renderWeatherCard = (forecasts) => {
    forecasts = forecasts.daily.slice(0, 5);
    const parentDiv = document.querySelector(".weather-card-container");
    parentDiv.innerHTML = "";

    const weatherFragment = document.createDocumentFragment();
    for (let forecast of forecasts) {
        weatherFragment.appendChild(createWeatherCard(forecast));
    }
    parentDiv.appendChild(weatherFragment);
};

(async () => {
    updateTime();
    setInterval(updateTime, 1000);
    const map = createMap("map", [-98.45408988902976, 29.519240323311802]);
    handleSearchSuggestion(async (suggestion) => {
        const coordinates = await getCoordinates(suggestion.full_address);
        map.flyTo({
            center: coordinates,
            zoom: 15,
            speed: 2,
        });
        const popup = new mapboxgl.Popup().setHTML(`<p>${suggestion.name}</p>`);
        const marker = new mapboxgl.Marker({
            draggable: true,
        })
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
        const city = suggestion.context.place.name;
        const state = suggestion.context.region.name;
        console.log("new city/state", city, state);
        const forecastLocation = document.querySelector("#forecast-location");
        forecastLocation.textContent = `Weather: ${city}, ${state}`;
        const forecast = await weatherForecast(coordinates);
        console.log("the forecast obj", forecast.daily);
        renderWeatherCard(forecast);
    });
    handleSearch(async (address) => {
        const coordinates = address.features[0].center;
        map.flyTo({
            center: coordinates,
            zoom: 15,
            speed: 2,
        });
        const popup = new mapboxgl.Popup().setHTML(
            `<p>${address.features[0].place_name}</p>`
        );
        const marker = new mapboxgl.Marker({
            draggable: true,
        })
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
        const city = address.features.find((feature) =>
            feature.place_type.includes("place")
        ).text;
        const state = address.features.find((feature) =>
            feature.place_type.includes("region")
        ).text;
        console.log("new city/state", city, state);
        const forecastLocation = document.querySelector("#forecast-location");
        forecastLocation.textContent = `Weather: ${city}, ${state}`;
        const forecast = await weatherForecast(coordinates);
        console.log("the forecast obj", forecast.daily);
        renderWeatherCard(forecast);
    });

    userLocation(async (coordinates) => {
        setLocation(coordinates);
        const userForecast = await weatherForecast(coordinates);
        renderWeatherCard(userForecast);
    });
})();
