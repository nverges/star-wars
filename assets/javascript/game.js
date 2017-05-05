// upon clicking crystal, add value to total score counter 

// user clicks red crystal
$("#rCrystal").on("click", function() {

	// totalScore variable updates
	totalScore = totalScore + rCrystal;    

	// totalScore displayed to HTML
    $("#totalScore").html("<h1>" + totalScore + "</h1>");  

    // reset function runs
    roundComplete();    
});


// blue crystal
$("#bCrystal").on("click", function() {
	totalScore = totalScore + bCrystal;    
    $("#totalScore").html("<h1>" + totalScore + "</h1>");  
    roundComplete();    
});


// yellow crystal
$("#yCrystal").on("click", function() {
	totalScore = totalScore + yCrystal;    
    $("#totalScore").html("<h1>" + totalScore + "</h1>");  
    roundComplete();    
});

// green crystal
$("#gCrystal").on("click", function() {
	totalScore = totalScore + gCrystal;    
    $("#totalScore").html("<h1>" + totalScore + "</h1>");  
    roundComplete();    
});