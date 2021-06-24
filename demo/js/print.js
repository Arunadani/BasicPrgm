console.log("this is console");
// alert("this is alert");

//add 2 nos
console.log("sum" + " " + (4 +3));

// add 2 input from browser user
try {
    let num1 = parseInt(prompt("type first number"));
    let num2 = parseInt(prompt("type second number"));
    let num3 = parseInt(prompt("type third number"));
    let num4 = num1 * num2 / num3;
    alert(num4);

}

catch (e){
    console.log("Run in Browser", e);
}


