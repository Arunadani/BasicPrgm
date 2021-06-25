// km to miles
//getting input of kilometers from the user
const km = prompt('Enter the Kilometer\'s: ');
//const km = 15;
// coversion
const factor = 0.621371;
// Calculate miles
const miles = km * factor;

console.log(`${km} Kilometer's are equal to, ${miles} miles.`);
