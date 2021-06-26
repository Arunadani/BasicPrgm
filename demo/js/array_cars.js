const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
cars[1] = "BMW";
cars[2] = "Tesla";
cars[3] = "Royce Rolls";
cars[4] = "Benz";
cars[5] = "volvo";
const values = [5,6,3,2,1,0,9,8,7,4,3,1,3,5,2,4];
const newval = values.map(newfunction);
//let text = "";
//console.log(cars);
//console.log(cars.length);
//sort
//console.log(cars.sort());
//console.log(cars.reverse());
//numeric sort

//console.log(values.sort(function(a, b){return a - b}));
//console.log(values.sort(function(a, b){return b - a}));

/*myfunction(values);

function myfunction(myArray){
    myArray.sort(function (a,b){ return a - b});
    console.log(myArray);
}*/

/*values.forEach(myfunc);
function myfunc(array, value, index){
     console.log(array,value, index);
}*/

function newfunction(valuese){
            return valuese*20;

}
console.log(values);
console.log(newval);





