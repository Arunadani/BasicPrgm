const animals = {
    lion:"lion",
        tiger:"tiger",
        panda:"panda",
        cat:"cat",
        dog:"dog"
};
let sounds = animals.cat;

console.log(sounds);

switch (sounds) {
        case animals.lion:
            console.log("roars");
            break;
        case animals.tiger:
            console.log("chuffs");
            break;
        case animals.panda:
            console.log("squeaks, growls, barks and huffs");
            break;
        case animals.cat:
            console.log("meows, chirrups, hisses, purrs, chatters, and growls");
            break;
        case animals.dog:
            console.log("barks");
            break;

    }
