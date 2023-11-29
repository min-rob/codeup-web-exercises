import { keys } from "./keys.js";
import { getForecast } from "../api/openweather.js";
import { createMap, getCoordinates, getAddress } from "../api/mapbox.js";

const OPEN_WEATHER_API_KEY = keys.openWeather;
const MAPBOX_API_KEY = keys.mapBox;
let sessionToken = null;
let selectedSuggestion = {};

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

// Function to handle the suggestion click and return the suggestion object
const saveSuggestionClick = (suggestion) => {
    selectedSuggestion = suggestion;
    return selectedSuggestion;
};

const handleSearchBar = (callback) => {
    const suggestionList = document.querySelector("#suggestions");
    const searchBar = document.querySelector("input[type='search']");

    searchBar.addEventListener("keyup", async (e) => {
        const userInput = e.target.value.toLowerCase();
        suggestionList.innerHTML = "";

        if (userInput.length > 3) {
            try {
                if (!sessionToken) {
                    sessionToken = generateSessionToken();
                }

                // Fetch suggestions using Mapbox Geocoding API
                const suggestions = await fetchSuggestions(
                    userInput,
                    sessionToken
                );

                // Display suggestions below the search bar
                for (let suggestion of suggestions) {
                    const li = document.createElement("li");
                    li.classList.add("suggestion");
                    li.textContent = suggestion.name;
                    li.addEventListener("click", () => {
                        // Call the function with the suggestion object
                        saveSuggestionClick(suggestion);
                        console.log("Returned suggestion:", suggestion);
                        callback(suggestion);
                    });
                    suggestionList.appendChild(li);
                }
            } catch (error) {
                console.error("Error fetching suggestions:", error);
            }
        }
    });
};

const userLocation = (callback) => {
    let userCoord = [];
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
                console.log(userCoord);
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
    console.log(newAddress);
    const city = newAddress.features.find((feature) =>
        feature.place_type.includes("place")
    ).text;
    const state = newAddress.features.find((feature) =>
        feature.place_type.includes("region")
    ).text;

    const locationText = document.querySelector("#user-location");
    locationText.textContent = `${city}, ${state}`;
    const forecastLocation = document.querySelector("#forecast-location");
    forecastLocation.textContent = `Forcast in: ${city}, ${state}`;
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

(async () => {
    updateTime();
    setInterval(updateTime, 1000);
    const map = createMap("map", [-77.60706, 38.78828]);
    handleSearchBar(async (suggestion) => {
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
    });
    userLocation((coordinates) => {
        setLocation(coordinates);
    });
})();
