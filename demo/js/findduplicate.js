let randomnum = [4,3,6,3,4,3];
let counts = {};
let duplicates = duplicate(randomnum);
console.log(duplicates);
function duplicate(randomnum){
    for(let i =0; i < randomnum.length; i++){
        if (counts[randomnum[i]]){
            counts[randomnum[i]] += 1;
        } else {
            counts[randomnum[i]] = 1;
        }
    }
    for (let j in counts){
        if (counts[j] >= 2){
            console.log(j + " duplicated: " + counts[j] + " times.");
        }
    }
    return counts;
}


