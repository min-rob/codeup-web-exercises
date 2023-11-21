const users = [
    {
        id: 1,
        name: "ryan",
        email: "ryan@codeup.com",
        languages: ["clojure", "javascript"],
        yearsOfExperience: 5,
    },
    {
        id: 2,
        name: "luis",
        email: "luis@codeup.com",
        languages: ["java", "scala", "php"],
        yearsOfExperience: 6,
    },
    {
        id: 3,
        name: "zach",
        email: "zach@codeup.com",
        languages: ["javascript", "bash"],
        yearsOfExperience: 7,
    },
    {
        id: 4,
        name: "fernando",
        email: "fernando@codeup.com",
        languages: ["java", "php", "sql"],
        yearsOfExperience: 8,
    },
    {
        id: 5,
        name: "justin",
        email: "justin@codeup.com",
        languages: ["html", "css", "javascript", "php"],
        yearsOfExperience: 9,
    },
];

/*
Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
Use .map to create an array of strings where each element is a user's email address
Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
Use .reduce to get the longest email from the list of users.
Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
*/

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const usersWithThreeLanguages = users.filter(
    (user) => user.languages.length >= 3
);
console.log(usersWithThreeLanguages);

// Use .map to create an array of strings where each element is a user's email address
const userEmails = users.map((user) => {
    return user.email;
});

console.log(userEmails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYearsOfExperience = users.reduce((accumulator, user, index) => {
    if (index === users.length - 1) {
        return (accumulator + user.yearsOfExperience) / users.length;
    }
    return accumulator + user.yearsOfExperience;
}, 0);
console.log(totalYearsOfExperience);

//use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        longest = user.email;
    }
    return longest;
}, "");
console.log(longestEmail);

//use .reduce to get the list of user's name in a single string. Example: your instructors are: ryan, luis, zach, fernando, justin.
const instructors = users.reduce((instructors, user) => {
    return instructors + user.name + ", ";
}, "");

console.log(instructors);

//Use .reduce to get the unique list of languages from the list of users.

// We're using the reduce function to iterate over the users array.
// The reduce function takes two arguments: a callback function and an initial value.
// In this case, the initial value is an empty array, which will hold the unique languages.
const uniqueLanguages = users.reduce((languages, user) => {
    // For each user, we iterate over their languages array.
    user.languages.forEach((language) => {
        // We check if the current language is already in the languages array.
        // If it's not, we add it.
        if (!languages.includes(language)) {
            languages.push(language);
        }
    });
    // We return the languages array for the next iteration.
    // On the first iteration, this will be the initial value (an empty array).
    // On subsequent iterations, it will be the array returned from the last iteration.
    return languages;
}, []);

// We log the array of unique languages to the console.
console.log(uniqueLanguages);
