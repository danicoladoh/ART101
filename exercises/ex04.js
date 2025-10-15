let totalNumber = 0;

//add a button titled try to click me
$("#needy-button").click( function(){

    totalNumber = totalNumber + 3;

    let sentence ="I said hello ";

    let totalNumbers = sentence + totalNumber;

    $("#needy-button").html(totalNumbers + " times");
})

//when its clicked 

//add one to the total number
// show how many times

//show the total number
//on our button
//show "clicked total times"

//a top limit