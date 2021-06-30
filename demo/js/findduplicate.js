let randomnum = [4,3,6,3,4,3]
let duplicates = duplicate();
function duplicate(random){
    let counts = {}

    for(let i =0; i < randomnum.length; i++){
        if (counts[randomnum[i]]){
            counts[randomnum[i]] += 1
        } else {
            counts[randomnum[i]] = 1
        }
    }
    for (let prop in counts){
        if (counts[prop] >= 2){
            console.log(prop + " duplicated: " + counts[prop] + " times.")
        }
    }
    return counts;
}

console.log(duplicates);
