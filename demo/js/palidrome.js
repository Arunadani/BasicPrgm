// palidrome

const mystr = "madamam";
const value = palidrome(mystr);


function palidrome(mystr){
    const len = mystr.length;
    console.log(len);
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
       // if (string[i] !== string[len - 1 - i]) {
        if (mystr[i] !== mystr[len - 1 - i]){
            return 'It is not a palindrome';
            //console.log(i);
        }
        else console.log("It is a palindrome");
    }

}
console.log(value);
