
//printing from lab 04
let place = "Magic Forest"

let creatures = [" Lila the little elf", " Monarch butterfly", " Squirrel"];

let introSentence = "Welcome to the " + place + ", we encountered so far:" + " " + creatures + ".";

$("#placed").html(introSentence);

let butterFacts = {
    science: "Danaus plexippus",
    type: "Insect",
    lifespan: "2-6 weeks (except migrating generation - up to 8 months)",
    size: "About 9-10 cm",
    colors: "Bright orange wings with black and white spots",
    habitat: "Found in meadows, fields, and gardens with milkweed",
    diet: "Drinks nectar from flowers",

};

let infoButter;

infoButter = "<h3>Monarch Butterfly - Fact Sheet</h3>";

infoButter = infoButter + "<ul>"+ "<li> Scientific name: " + butterFacts.science + "</li>" +
 "<li>Type: " + butterFacts.type + "</li>" +
 "<li>Lifespan: " + butterFacts.lifespan + "</li>" +
 "<li> Size: " + butterFacts.size + "</li>" +
 "<li> Colors: " + butterFacts.colors + "</li>" +
 "<li> Habitat: " + butterFacts.habitat + "</li>" +
 "<li> Diet: " + butterFacts.diet + "</li>" + "</ul>";

$("#info-a").html(infoButter);

let squirrelFacts = {
    science: "Sciurus (genus)",
    type: "Mammal, rodent",
    lifespan: "5-10 years in the wild",
    size: "20-30 cm body + long bushy tail",
    colors: "Gray, brown, red, or black (depends on species)",
    habitat: "Lives in forests, parks, and gardens",
    diet: "Nuts, seeds, fruits, and berries",
};

let infoSquirrels;

infoSquirrels = "<h3>Squirrel - Fact Sheet</h3>";

infoSquirrels = infoSquirrels + "<ul>"+ "<li> Scientific name: " + squirrelFacts.science + "</li>" +
 "<li>Type: " + squirrelFacts.type + "</li>" +
 "<li>Lifespan: " + squirrelFacts.lifespan + "</li>" +
 "<li> Size: " + squirrelFacts.size + "</li>" +
 "<li> Colors: " + squirrelFacts.colors + "</li>" +
 "<li> Habitat: " + squirrelFacts.habitat + "</li>" +
 "<li> Diet: " + squirrelFacts.diet + "</li>" + "</ul>";

$("#info-b").html(infoSquirrels);

//toggle buttons

$("#info-a").hide();

$("#butterfly").click( function (){
    $("#info-a").toggle();
});

$("#info-b").hide();

$("#squirrel").click( function (){
    $("#info-b").toggle();
});

//quiz

let count = 0;

let score = 0;
$("#score").html("Score: " + score);

let quiz = [
    {question:"What are we exploring right now?", answer: "magic forest" },
    {question:"Who loves nuts?", answer: "squirrel" },
    {question: "Who has bright orange wings?", answer: "butterfly"},
    {question: "Who drinks nectar from flowers?", answer: "butterfly"},
    {question: "Who lives around 5-10 years?", answer: "squirrel"},
];

// AI usage:
// Prompt: With this js function using jQuery library, how can I add a score of points?
// Response: ChatGpt made modifications to my code and added the "score++" in my conditional,
// My changes: I already had a base code so I used AI for the part that wasn't working
// Reasoning: I wanted to create a minigame inside my website.
// What code is AI: The modifications related to the score variable.

function askQuestion (ask){
    let userAnswer = prompt(ask.question);
    if (userAnswer == ask.answer){$("#output").html("Congrats! You got it!"); score++;}
    else {$("#output").html("Oh no, try the next one!");};

    $("#score").html("Score: " + score);

};

$("#elf").click( function() {
    askQuestion(quiz[count]);
    count = count +1;
    if (count == 5) {count = 0};
});

//more hiding, welcome page

$("#main").hide();

$("#menu button").click( function() {
    $("#menu").fadeOut(1000);
    $("#main").fadeIn(1500);
});

