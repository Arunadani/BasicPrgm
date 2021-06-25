//string methods
let str = "welcome atlanta to atlanta is always null";
console.log(str.indexOf("atlanta", 10));
console.log(str.lastIndexOf("atlanta"));
console.log(str.lastIndexOf("hello"));
console.log(str.search("atlanta"));
console.log(str.startsWith("atlanta",8));
//numbers
let temp = 10 + "apple";
console.log(isNaN(temp));
//number methods
let y = 123 + 100;
y = y.toString();
console.log(typeof(y));
console.log(y.toString());
console.log(y.toString());

// arrays
let words = ["bom", "doll", "mail", "mill", "eve", "dil"];
//console.log(words);
console.log(words.length - 1);
console.log(words.length);

words.forEach(function(i){
    if (i === "eve"){
        console.log(i)
    }
});
words.push("dom");

words.forEach(function(i){

        console.log(i)

});
words[2]="dom";
console.log(words);
console.log(typeof words);
console.log(Array.isArray(words));

let cars = {Type:"four wheel",Company: "bmw", AC: "No", Gas:"Yes"};
console.log(cars.Type);
console.log(Array.isArray(cars));







