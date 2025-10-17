// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "ByCycle bike", "walking", "friend's car", "Zipcar"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "walking",
    route: "forest path",
    print: "Mountain Lion",
    hasHikingShoes: false,
    companions: ["Rocio", "Alex", "the guy with a mountain bike"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[3] + ", " + myCommutes[2] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", through  " + myFavouriteCommute.route + ", the best companion: " + myFavouriteCommute.companions[0] + "</p>";

$("#output").html(megaSentence)
