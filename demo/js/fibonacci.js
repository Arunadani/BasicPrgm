// fibonacci series
let a = 5;
let b = 0, c = 1, d;
// printing first 2 nos
console.log("The fibonacci series is: ");
console.log(b);
console.log(c);
// add 2 values and assign to d
d = b + c;
// make fibonacci series
while (d <= a){
    console.log(d);
    b = c;
    c = d;
    d = b + c;
}


