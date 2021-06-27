
//let num = [5,2,4,1,6,8,6,3];
let num = [5,4,3,"w",1];
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
