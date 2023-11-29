import { keys } from "./keys.js";
import { getForecast } from "../api/openweather.js";
import { createMap, getCoordinates, getAddress } from "../api/mapbox.js";

const OPEN_WEATHER_API_KEY = keys.openWeather;
const MAPBOX_API_KEY = keys.mapBox;

// const getCoordinates = async (searchText) => {
//     searchText = encodeURIComponent(searchText);
//     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapBox}`;
//     const options = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     };
//     const response = await fetch(url, options);
//     const data = await response.json();
//     console.log(data);
//     return data.features[0].center;
// };

const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const formattedTime = `Current time: ${hours}:${minutes}`;

    document.querySelector("#time").innerText = formattedTime;
};

(async () => {
    updateTime();
    setInterval(updateTime, 1000);
    const coordinates = await getCoordinates("8700 Tesoro Dr, San Antonio");
    console.log(coordinates);
    mapboxgl.accessToken = keys.mapBox;
    const map = new mapboxgl.Map({
        container: "map", // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        center: [-77.60706, 38.78828], // starting position [lng, lat]
        style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
        zoom: 15, // starting zoom
        keyboard: false,
    });
})();
