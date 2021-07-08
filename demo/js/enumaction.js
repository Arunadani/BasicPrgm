let task = {
    operations:1,
    completed:2 }
let a = 5;
let b = 10;


let actions = task.operations;
for (let i = 2; i>= 0; i--) {

    switch (actions) {
        case 1:

            let add = addition(a, b);
            console.log("The value of addition is" + " " + add);
            actions = task.completed;

            break;
        case 0:
            console.log("I don't have any operation");
            break;
        case 2:
            console.log("operation is completed");
            actions = 0;
            break;
    }
}
function addition(a, b){
    let c = a + b;
    return c;
    //console.log("The value of addition is" +" " + c);
}



