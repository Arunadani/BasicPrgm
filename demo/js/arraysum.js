
//let num = [5,2,4,1,6,8,6,3];
let num = [5,4];
let n = num.length;
let temp;
let sum1 = 0;
for (let a=0; a < n; a++){
    for (let b = a + 1; b < n; b++) {
        if (num[b] < num[a]) {
            temp = num[a];

            num[a] = num[b];

            num[b] = temp;

        }
    }
}

for (let i = 0; i < n; i++){
    if (isNaN(num[i])){
console.log("Element is not a number")
    }else sum1 = sum1 + num[i];

}
console.log(sum1);

let arrayaddition = arradd();

function arradd(add){
    let num1 = [5,6,4];
    let num2 = [6,8,9];
    let sum = [];
    for (let i= 0; i<3; i++){
        for (let j = i; j<=i; j++){
         sum[i] = num1[i] + num2[j];
        }
    }
    //console.log(sum);
    return sum;
}
console.log(arrayaddition);
