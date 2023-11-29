import { keys } from "../js/keys.js";
/**
 * Gets a forecast from the OpenWeather API
 * @param {number} lat - latitude of the coordinates
 * @param {number} lng  - longitude of the coordinates
 * @returns {Promise} - a promise that resolves to the forecast data
 */

const OPEN_WEATHER_API_KEY = keys.openWeather;
const OPEN_WEATHER_API_KEY2 = keys.openWeather2;

export const getForecast = async (lat, lng) => {
    if (Array.isArray(lat)) {
        lng = lat[1];
        lat = lat[0];
    }
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${OPEN_WEATHER_API_KEY}`;
    const options = {
        method: "GET",
    };
    const response = await fetch(url, options);
    const data = response.json();
    return data;
};
