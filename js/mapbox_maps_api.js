import { keys } from "./keys.js";

const favoriteRestaurants = [
    {
        id: 0,
        name: "Firebirds Wood Fired Grill",
        info: "Steaks and Grill",
        address: "14020 Promenade Commons St, Gainesville, VA 20155",
    },
    {
        id: 1,
        name: "Nando's PERi-PERi",
        info: "Afro-Portuguese chain restaurant serving flame-grilled chicken in spicy chili sauce.",
        address: "12120 Sunset Hills Rd Ste 103, Reston, VA 20190",
    },
    {
        id: 2,
        name: "Gogiyeon",
        info: "Korean BBQ",
        address: "17 Jahamun-ro 1ga-gil, Jongno-gu, Seoul, South Korea",
    },
];

favoriteRestaurants.forEach((restaurant) => {
    console.log(restaurant.address);
});

const restaurantAddress = (btnId) => {
    const restaurant = favoriteRestaurants.find(
        (restaurant) => restaurant.id === btnId
    );
    return restaurant.address;
};

const restaurantName = (btnId) => {
    const restaurant = favoriteRestaurants.find(
        (restaurant) => restaurant.id === btnId
    );
    return restaurant.name;
};

const restaurantInfo = (btnId) => {
    const restaurant = favoriteRestaurants.find(
        (restaurant) => restaurant.id === btnId
    );
    return restaurant.info;
};

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

const getCoordinates = async (restaurants) => {
    let coordinates = [];
    restaurants.forEach(async (restaurant) => {
        let restaurantAddy = encodeURIComponent(restaurant.address);
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${restaurantAddy}.json?access_token=${keys.mapboxDefault}`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        coordinates.push(data.features[0].center);
    });
    return coordinates;
};

(async () => {
    const coordinates = await getCoordinates(favoriteRestaurants);
    console.log(coordinates);
    mapboxgl.accessToken = keys.mapboxDefault;
    const map = new mapboxgl.Map({
        container: "map", // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
        center: [0, 0], // starting position [lng, lat]
        zoom: 15, // starting zoom
        keyboard: false,
    });
    console.log(restaurantAddress(1));
})();
