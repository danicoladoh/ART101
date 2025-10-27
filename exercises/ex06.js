  var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];


//add images
function makeImage (imageName) {

 if (colors[colorCount] == imageName) {
       $("body").append("<img width=100 src='image/" + imageName + ".png'>");
   }

};

//change color
function changeBackground (newColor){

     $("body").css("background-color", newColor);

};

//adressing buttons
$(".color-button").click(function () {

    changeBackground(this.id);

});

//mood
function moodf (moodCount) {
    
    if (moodCount < 5) { mood = "gresh and happy"; }
   else if ((moodCount >= 5) && (moodCount < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }
   $("#needy-button").html("Clicks: " + moodCount + " Color: " + colors[colorCount] + " " + mood);
}


// the button part
$("#needy-button").click(function () {


    moodf(count);

   changeBackground(colors[colorCount]);
 
   makeImage("Coral"); 
   makeImage("Orchid"); 

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});
