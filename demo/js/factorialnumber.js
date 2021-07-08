let a = 6;
answer = factorial(a);
console.log(`factorial of ${a} is ${answer}`);

function factorial(a){
    let answer = 1;
        for(let i = a; i >= 1; i--){
            answer = answer * i;
        }
        return answer;
}
