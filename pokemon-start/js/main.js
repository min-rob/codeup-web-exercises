import { getPokemon, getPokemonAll } from "./pokemon-api.js";

//MAIN
(async () => {
    const list = await getPokemonAll();
    console.log(list);
})();
