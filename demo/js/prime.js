let num = 11;
let temp = 0;

for (let i=2; i <=num/2; i++){
    console.log("prime" + i);
    if (num %i == 0){
        temp=1;

    }

}
if ((temp == 1) || ((num== 0)|| (num==1))){
    console.log("Its not Prime");
}
else console.log("Its a prime");
