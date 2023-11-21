import { keys } from "./keys.js";

const getPokemon = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
    // not using async/await
    // return fetch(url, options)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         return data;
    //     });
};

const getPokemonLocation = async (url) => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

//MAIN
(async () => {
    // const treecko = await getPokemon("treecko");
    // console.log(treecko);
    //WITHOUT ASYNC IIFE.
    getPokemon("treecko").then((pokemon) => {
        console.log(pokemon);
        getPokemonLocation(pokemon.location_area_encounters).then(
            (location) => {
                console.log(location);
            }
        );
    });
    //THE FETCH
    // const url = "https://pokeapi.co/api/v2/pokemon/treecko";
    // const options = {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // };
    // fetch(url, options)
    //     .then((response) => {
    //         console.log(response);
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     });
    //THE FETCH WITH PROMISES
    // fetch("https://pokeapi.co/api/v2/pokemon/1").then();
    //THE FETCH WITH ASYNC/AWAIT
    // fetch().then();
    //THE FETCH WITH ASYNC/AWAIT AND TRY/CATCH
    // fetch().then();
    //THE FETCH WITH ASYNC/AWAIT, TRY/CATCH AND THE RESPONSE OBJECT
    // fetch().then();
    //THE FETCH WITH ASYNC/AWAIT, TRY/CATCH, THE RESPONSE OBJECT AND THE JSON METHOD
    // fetch().then();
    //THE FETCH WITH ASYNC/AWAIT, TRY/CATCH, THE RESPONSE OBJECT, THE JSON METHOD AND THE DATA
    // fetch().then();
    //THE FETCH WITH ASYNC/AWAIT, TRY/CATCH, THE RESPONSE OBJECT, THE JSON METHOD, THE DATA AND THE ERROR HANDLING
    // fetch().then();
})();
