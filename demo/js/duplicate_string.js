let str = "Stringmaycontainsomething";

let charlen = 256;

findDuplicate(str);

console.log(duplicate);

function findDuplicate(newStr){

    let count = new Array(charlen);
    count.fill(0);
    
    for (let i = 0; i < newStr.length; i++)
            count[newStr[i].charCodeAt()]++;
             
        for (let i = 0; i < charlen; i++)
        {
            if(count[i] > 1)
            {
                console.log(String.fromCharCode(i) +
                count[i]);
            }

            }
            //return str;

}

