let text = "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty"

//console.log(text);
//console.log(text.length);
//console.log(text.match(/(\w+)/g).length)


let countTotal = wordcount(text);

function wordcount(counts) {
    let count = 0;
    console.log(counts.trim());
    let words = counts.split(" ");
    //console.log(words);
    for (let i = 0; i < words.length; i++) {
        // inner loop -- do the count
        if (words[i] !== "") {
            //if (words[i] == "the") {
            count += 1;
        }
    }

    return (count);

}
console.log(countTotal);
