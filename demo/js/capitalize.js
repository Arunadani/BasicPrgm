// capitalize first letter.

function capitalizeFirstLetter(str){
    let capitalize = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalize
}
const txt = prompt('Enter the text: ');
const result = capitalizeFirstLetter(txt);
console.log(result);

//const capitalized = str.replace(/^./, str[0].toUpperCase());
