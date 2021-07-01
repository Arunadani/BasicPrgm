let num = 63165432;
let reversenum =reverseint(num);
console.log(reversenum);
function reverseint(reversenum) {
    let result = 0, counter = 0;
    while(reversenum){
        result = reversenum % 10;
        counter = (counter * 10) + result;
        reversenum = reversenum / 10 | 0;
    }
    return counter;
}

