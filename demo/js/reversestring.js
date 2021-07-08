let str = "jedi";
reverseString(str);
//console.log("The reverse of string is" + word);
function reverseString(str) {
    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log("The reverse of string is" + " " + newString);
    //return newString;
}
