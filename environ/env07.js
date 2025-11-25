
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

$("#a").html(infoButter);

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

$("#b").html(infoSquirrels);

//toggle buttons (refactorized)
$(".info").hide();

$(".creature").click( function (){
    $(this).siblings('div').toggle();
});


//quiz
const quiz = [
    {question:"What are we exploring right now?", answer: "magic forest" },
    {question:"Who loves nuts?", answer: "squirrel" },
    {question: "Who has bright orange wings?", answer: "butterfly"},
    {question: "Who drinks nectar from flowers?", answer: "butterfly"},
    {question: "Who lives around 5-10 years?", answer: "squirrel"},
];

let count = 0;

let score = 0;
$("#score").html("Score: " + score);

function askQuestion (ask){
    const userAnswer = prompt(ask.question).toLowerCase(); // now the user can type in either lower or upper case
    if (userAnswer == ask.answer.toLowerCase()){$("#output").html("Congrats! You got it!"); score++;}
    else {$("#output").html("Oh no, try the next one!");};

    $("#score").html("Score: " + score);

};

$("#elf").click(function() {
    askQuestion(quiz[count]);
    count = (count + 1) % quiz.length;
});
//now the quiz re-starts, i can add more questions and the code will work anyways

//more hiding, welcome page
$("#main").hide();

$("#menu button").click( function() {
    $("#menu").fadeOut(1000);
    $("#main").fadeIn(1500);
});

// lab 8
$(document).mousemove(function(event) {
    $("#fairy").css({
        left: event.pageX + "px",
        top: event.pageY + "px",
        position: "absolute"
    });
});

// hover (factorized)
$(".fact").hide();

$(".creature").hover(function (event) {
   $(this).siblings('p').show();
   
});
