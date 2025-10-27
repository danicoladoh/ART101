let count = 0;

let colors = ["Red", "Orange", "Yellow", "Green"];

$("#magic-button").click( function() {
    $("body").css("background-color", colors[count]);
    count = count + 1;
    if (count == 4) {count = 0};

});