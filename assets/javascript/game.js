// upon clicking crystal, add value to total score counter 

// user clicks red crystal
$("#char1").on("click", function() {

	// totalScore variable updates
	totalScore = totalScore + rCrystal;    

	// totalScore displayed to HTML
    $("#chosen_char").html("<img src="assets/images/yoda.jpg" alt="chosen_char" width="150px" height="150px">");

    // reset function runs
    roundComplete();    
});


// blue crystal
$("#char2").on("click", function() {
    
	totalScore = totalScore + bCrystal;  

    $("#chosen_char").html("<button class="btn btn-default"><img src="assets/images/obi_wan.jpg" alt="chosen_char" width="150px" height="150px"></button>");
  
    roundComplete();    
});


// yellow crystal
$("#char3").on("click", function() {
	totalScore = totalScore + yCrystal;    
    $("#totalScore").html("<h1>" + totalScore + "</h1>");  
    roundComplete();    
});

// green crystal
$("char4").on("click", function() {
	totalScore = totalScore + gCrystal;    
    $("#totalScore").html("<h1>" + totalScore + "</h1>");  
    roundComplete();    
});