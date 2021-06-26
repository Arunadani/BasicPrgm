//fibonacci recursion
function fseries(num){
    if (num < 2){
         return num
    }
    else return fseries(num - 1) + fseries (num - 2);
}

const a = 10;

if (a <=0){
    console.log("number is negative")
}
else {
    for (let i = 0; i<a; i++){
        console.log(fseries(i));
    }
}
