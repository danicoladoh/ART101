let count = 0;

let colorcount = 0;


let mood = "fresh and happy";

let colors = ["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click( function() {

    $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorcount] + " " + mood);
   
    $("body").css("background-color", colors[colorcount]);
   
    count = count + 1;

    colorcount = colorcount + 1;

    if ( colorcount == 4 ) { colorcount=0; };

    if ( count < 5) { mood = "fresh and happy";}
    else if (count >= 5 && count < 10) {mood = "keep pushing";}
    else { mood = "so tired!";}

    if (colors[colorcount] == "Orchid" ) { $("body").append("<img width=100 src='image/orchid.png'>") }



});
