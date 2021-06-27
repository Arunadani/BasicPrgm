
let num= [1,8,3,2,6];
let n= num.length;
console.log("The value of N:" + n);
let myeven = [];
console.log(myeven.length);
let myodd = [];
let  evenflag =0;
let oddflag=0;
for (let i=0; i<n; i++){
    if(num[i]%2 === 0){
        myeven[i] = num[i];
        evenflag++;


    }else if (num[i]%2 !== 0){
        myodd[i] = num[i];
        oddflag++
    }
}
console.log("The value of N:" + n);
for (let i=0;i<= n-1;i++){
    if (isNaN(myeven[i])){    }
    else console.log("the even values of array: "+ myeven[i]);

}
for (let i=0;i<= n-1;i++){
    if (isNaN(myodd[i])){    }
    else console.log("the odd values of array: "+ myodd[i]);
}
// console.log("the even values of array: "+ myeven.join(" "));
// else console.log("the odd values of array: "+ myodd[i]);

