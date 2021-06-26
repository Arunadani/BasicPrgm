let num = 100;
let flag = 0;
let flag1 = 0;
for (let i = 1,n = 1; i <= num,n <= num; i++,n++){
    //console.log(i);
    if (0 == i%3) {
        flag += 1;
        console.log(i);
    }
    if (0 == n%10){
        flag1 += 1;
        console.log(n);
    }
}
console.log(flag);
console.log(flag1);


   /* if (i == i / 3) {
        flag = 1;
    }
}
if (flag == 1)
{
    console.log("can be divided");
}
else console.log("cant be divided");*/
