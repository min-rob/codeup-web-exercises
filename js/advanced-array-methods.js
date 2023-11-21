import { NETFLIX_TITLES } from "./netflix-titles.js";

(() => {
    // The filter method
    const scifiTitles = NETFLIX_TITLES.filter((title) =>
        title.listed_in.includes("Sci-Fi")
    );
    console.log(scifiTitles);

    const theNextGeneration = NETFLIX_TITLES;

    // THE SOME METHOD
    const hasStarTrek = NETFLIX_TITLES.some((movie) => {
        return (
            movie.title.toLowerCase().includes("star trek") &&
            movie.type.toLowerCase() === "movie"
        );
    });
    if (hasStarTrek) {
        console.log("it has star trek movies, but star wars is better");
    }

    // THE MAP METHOD
    const betterNetflixTitles = NETFLIX_TITLES.map((movie, index) => {
        const betterObject = {
            id: movie.show_id || index + 1,
            type: movie.type,
            direct: movie.director,
            cast: movie.cast?.split(", "),
            date_added: movie.date_added,
            release_year: movie.release_year,
            rating: movie.rating,
            duration: movie.duration,
            listed_in: movie.listed_in?.split(", "),
            description: movie.description,
        };
        return betterObject;
    });
    console.log(betterNetflixTitles);

    const nameOfActionStalloneMovies = betterNetflixTitles.reduce(
        (accumulator, currentValue) => {
            if (
                currentValue.listed_in.includes("Action") &&
                currentValue.cast.includes("Sylvester Stallone")
            ) {
                return `${movie.title}, accumulator`;
                // accumulator.push(currentValue.title);
            }
            return accumulator;
        },
        []
    );
    console.log(nameOfActionStalloneMovies);
})();
