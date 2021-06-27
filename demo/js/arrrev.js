let num = [5,2,4,1,6,8,6,3];
let n = num.length;
let temp;
for (let a=0; a < n; a++){
    for (let b = a + 1; b < n; b++) {
        if (num[b] < num[a]) {
            temp = num[a];

            num[a] = num[b];

            num[b] = temp;

        }
    }
}
for (let i = n - 1; i >= 0 ; i--){
    console.log(num[i]);

}
