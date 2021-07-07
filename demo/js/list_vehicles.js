let listofvehicles = [];
let vehicles = ["car","bike","boat","skateboard","scooter","helicopter","plane"]
vehicles.forEach(function (entryofvehicle) {
        let generalvehicles = {};
    generalvehicles['type'] = 'Vehicle';
    generalvehicles['value'] = entryofvehicle;
    listofvehicles.push(generalvehicles);
});
console.log(listofvehicles);
