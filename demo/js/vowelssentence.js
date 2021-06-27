let text = "Whvr dwlls in the shelter of the Most High will rest in the shadow of the Almighty"
//let text = "mdm is here"
let vowelsArr = [];
let words;
    wordcount(text);

function wordcount(counts) {
    console.log(counts.trim());
    words = counts.split(" ");

    for (let i = 0; i < words.length; i++) {
        for (j = 0; j <= words[i].length; j++){
            if (words[i][j] == "a" || words[i][j] == "e" || words[i][j] == "i" || words[i][j] == "o" || words[i][j] == "u") {
                vowelsArr.push(words[i]);
                break;
            }
        }
    }
}
console.log("total words count: " + words.length);

console.log(vowelsArr.join(" "));



console.log('Count: '+ vowelsArr.length);

