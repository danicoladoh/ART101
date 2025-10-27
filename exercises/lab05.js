function askNumber (whatNumber) {
    let userNumber = prompt("Guess 1-20?");
    if (userNumber == whatNumber) {$("#output").html("You got it!");}
    else {$("#output").html("Noooope");}
};

$("#good-button").click(function () {
    askNumber(3);
});