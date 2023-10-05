console.log("Testing 123");

let easyMath = 2+2;
console.log(easyMath);

// Unary Operators
let y = 5;
y++;
y--;
console.log(y);

// method to turn number into string
let pi = 3.14;
let piString = "" + pi;
console.log("piString = ", piString, typeof piString)

let funcString = piString.toString();
console.log(funcString);

// string to #
let nmrOfStudents = "19";

console.log(parseInt(nmrOfStudents)); //this is a JS function

let bankNmr = "23.2323";

console.log(Math.round(bankNmr));

let x = "griffin"; 
let xNumber = Number(x);
let isEqual = xNumber === NaN;
console.log("NaN strict comparison =>", isEqual);

let isReallyEqual = isNaN(xNumber);
console.log(isReallyEqual)

console.log(xNumber);
console.log(isEqual);

let noValue;
let noData = null;

if (noData) {
    console.log("It is truthy!")
}
else {
    console.log("It is falsey..")
}

// String methods

let username = "Justino (Nova)";
let guildname; // Empty variable, where we will declare/decide it later.

let nameLength = username.length; // we use .length string method to get the length of the string.
console.log("nameLength =>", nameLength); 
let guildNameStart = username.indexOf("("); // here we use the indexOf() method to determine the index or the location where the parenthesis is at.
console.log("guildNameStart =>", guildNameStart); 
let guildNameEnd = nameLength -1; // here we do -1 because we don't want to include the end ")" and only include the string we need.
let justGuildName = username.substring(guildNameStart + 1, guildNameEnd); // so we already determined the end of the guild name, to find the start to not include the "(" we +1
guildname = justGuildName; // here we are finally declaring the guild name
console.log("the guild name is:", guildname); 
username = username.replace("(" + guildname + ")", "").trim(); // Here we are replacing the parenthesis and the guildname we found with an empty string, then we use the trim.() method to remove whitespaces
console.log("Final username:", username)

// Template Strings
let channelMessage = "username from the guildName guild has logged in.";
channelMessage = username + " from the " + guildname + " guild has logged in.";
console.log(channelMessage);

console.log(`${username} from the ${guildname} guild has logged in.`);