


$("#crAdd").click( function(){
 let crName = $("#crName").val();
 if (crName == "" || crName.length >11){}
 else {$("#a-creature").append(crName+", ")}
 $("#crName").val("");

});

$("#clearAll").click( function(){
    $("#a-creature").remove
    $("#creature-list").html(" <div  id='a-creature'> </div>")
});

