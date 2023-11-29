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

const restaurantAddress = (btnId) => {
    btnId = parseInt(btnId);
    const restaurant = favoriteRestaurants.find(
        (restaurant) => restaurant.id === btnId
    );
    return restaurant.address;
};

const restaurantName = (btnId) => {
    btnId = parseInt(btnId);
    const restaurant = favoriteRestaurants.find(
        (restaurant) => restaurant.id === btnId
    );
    return restaurant.name;
};

const restaurantInfo = (btnId) => {
    btnId = parseInt(btnId);
    const restaurant = favoriteRestaurants.find(
        (restaurant) => restaurant.id === btnId
    );
    return restaurant.info;
};

// const getCoordinates = async (restaurants) => {
//     let coordinates = [];
//     restaurants.forEach(async (restaurant) => {
//         let restaurantAddy = encodeURIComponent(restaurant.address);
//         const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${restaurantAddy}.json?access_token=${keys.mapBox}`;
//         const options = {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         };
//         const response = await fetch(url, options);
//         const data = await response.json();
//         coordinates.push(data.features[0].center);
//     });
//     return coordinates;
// };

const getCoordinates = async (address) => {
    let coordinates = [];
    let restaurantAddy = encodeURIComponent(address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${restaurantAddy}.json?access_token=${keys.mapBox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    coordinates.push(data.features[0].center);
    return coordinates;
};

const getAddressOnClick = async (callback) => {
    const buttons = document.querySelectorAll(".btn");
    for (let button of buttons) {
        button.addEventListener("click", async (e) => {
            const id = e.target.id;
            const address = restaurantAddress(id);
            try {
                const coordinates = await getCoordinates(address);
                console.log(coordinates);
                callback(coordinates);
            } catch (error) {
                console.log("error", error);
            }
        });
    }
};
const getRestaurantName = (callback) => {
    const buttons = document.querySelectorAll(".btn");
    for (let button of buttons) {
        button.addEventListener("click", (e) => {
            const id = e.target.id;
            const name = restaurantName(id);
            callback(name);
        });
    }
};

(async () => {
    mapboxgl.accessToken = keys.mapBox;
    const map = new mapboxgl.Map({
        container: "map", // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        center: [-77.60706, 38.78828], // starting position [lng, lat]
        style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
        zoom: 15, // starting zoom
        keyboard: false,
    });
    const name = await new Promise((resolve) => {
        getRestaurantName((restaurantName) => {
            resolve(restaurantName);
        });
    });
    getAddressOnClick((coordinates) => {
        map.flyTo({
            center: coordinates[0],
            zoom: 15,
            speed: 2,
        });
        const popup = new mapboxgl.Popup().setHTML(`<p>${name}</p>`);
        const marker = new mapboxgl.Marker({
            draggable: true,
        })
            .setLngLat(coordinates[0])
            .addTo(map)
            .setPopup(popup);
    });
})();
