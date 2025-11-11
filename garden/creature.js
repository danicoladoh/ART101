//a variable for storing names

//when the button is clicked
$("#add-creature").click(
    function(){    
  
    let crName = $("#crName").val();

    if (crName=="") || (crName.length>11) {};
    else {
        $("#creature-list").append(crName + ", ");
    }

    // remove the name after it's added
    $("#crName").val("");



});