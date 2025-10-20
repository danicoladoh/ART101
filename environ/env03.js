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
 "<li> Diet: " + butterFacts.diet + "</li>" ;

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
 "<li> Diet: " + squirrelFacts.diet + "</li>" ;

$("#info-b").html(infoSquirrels);