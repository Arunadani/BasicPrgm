/*let num = 5;

for (let i = 0; i<=num; i++){
    console.log(i);
}
*/
// for sum
let sum = 0;
for (let i = 0; i<=5; i++){
    sum = sum +i;
}
console.log(sum);
let sum1 = 0;
for (let i = 0; i <= 5; i++){
    if (i%2 == 0){
        sum1 = sum1 + i;
        //console.log(i);
    }
}
console.log(sum1);
let sum2 = 0;
for (let i=0; i<=5; i++){
    if(i%2 !== 0){
       // console.log(i);
        sum2 = sum2 + i;
    }
}
console.log(sum2);

