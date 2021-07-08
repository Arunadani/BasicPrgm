const animals = {
    lion:"lion",
        tiger:"tiger",
        panda:"panda",
        cat:"cat",
        dog:"dog"
};
let sounds = animals.tiger;

console.log(sounds);

switch (sounds) {
        case "lion":
            console.log("roars");
            break;
        case "tiger":
            console.log("chuffs");
            break;
        case "panda":
            console.log("squeaks, growls, barks and huffs");
            break;
        case "cat":
            console.log("meows, chirrups, hisses, purrs, chatters, and growls");
            break;
        case "dog":
            console.log("barks");
            break;

    }
