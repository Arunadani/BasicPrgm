for(let i =0; i<= 3; i++){
    for (let j = i; j<=2; j++){
        console.log(`this is I andJ, ${i}, ${j}`);
    }
}
let str = "";
for (let i = 0; i<= 5; i++){
    for ( let j = 0; j <= i; j++ ){
        str += "*";
    }
    str +="\n";
}
console.log(str);
