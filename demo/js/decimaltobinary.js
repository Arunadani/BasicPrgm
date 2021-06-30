let Value  = 12;
let result = decimalToBinary(Value);


function decimalToBinary(Value) {
    let Values    = Value;
    let base           = 2;

    let quotient       = 0;
    let remainder = [];
    let results    = [];

    if (Values) {
        while (Values) {
            quotient = parseInt(Values / base);

            remainder.push(Values % base);

            Values = quotient;
        }
        for (let i = remainder.length - 1; i >= 0; i--) {
            results.push(remainder[i]);
        }
        return parseInt(results.join(''));
    } else {
        return `${Value} is not a valid Value`;
    }
}
console.log(result);
