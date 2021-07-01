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
    for (let i in counts){
        if (counts[i] >= 2){
            console.log(i + " duplicated: " + counts[i] + " times.");
        }
    }
    return counts;
}




let arr = ["abc","xy","bb", "abc"];
let chk = checkDuplicate(arr);
console.log(chk);
function checkDuplicate(arr) {
    // call some function with callback function as argument
    for(let i = 0; i < arr.length;i++) {
        for(let j = 0; j < arr.length;j++) {
            // do not compare same elements
            if(i !== j) {
                // check if elements match
                if(arr[i] === arr[j]){
                    // duplicate element found
                    result = true;
                    // terminate inner loop
                    break;
                }
            }
        }
        // terminate outer loop
        if(result){
            break;
        }
    }
    if(result) {
        console.log('Array contains duplicate elements');
    } else {
        console.log('Array does not contain duplicate elements');
    }
    return result;
}
