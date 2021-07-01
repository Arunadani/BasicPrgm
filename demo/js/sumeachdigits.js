
let n  = 172;
let temp = 0;
let sum = 0;

let sumofdigits = sumdigits(n);
console.log(sumofdigits);

function sumdigits(n){
    while (n !== 0)
    {
        temp = n % 10;
        sum = sum + temp;
        n = parseInt(n/10);
    }
    return sum;
}


