//variables ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// player values ////////////////////////////////////////////////////////////////////////

// player Attack Power
var playerDmg;
var playerDmgArr = [];
var player1dmg;
var player2dmg;
var player3dmg;
var player4dmg;

// player Counter Attack Power
var playerCA;
var playerCAarr = [];
var player1CA;
var player2CA;
var player3CA;
var player4CA;

// player health points
var playerhp;
var playerhp = [];
var player1hp;
var player2hp;
var player3hp;


// enemy values ////////////////////////////////////////////////////////////////////////

// enemy Counter Attack Power - Static
var enemyCA;
var enemyCAArr = [];
var enemy1CA;
var enemy2CA;
var enemy3CA;
var enemy4CA;

// Enemy health points
var enemyhp;
var enemyhp = [];
var enemy1hp;
var enemy2hp;
var enemy3hp;
var enemy4hp;



// click events ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// player click events ////////////////////////////////////////////////////////////////////////

// Char 1
$("#char1").on("click", function() {
    $("#chosen_char").html("<img src='assets/images/yoda.jpg' width='150px' height='150px' />");     
});

// Char 2
$("#char2").on("click", function() {
    $("#chosen_char").html("<img src='assets/images/obi_wan.jpg' width='150px' height='150px' />");     
});

// Char 3
$("#char3").on("click", function() {
    $("#chosen_char").html("<img src='assets/images/luke_skywalker.jpg' width='150px' height='150px' />");     
});

// Char 4
$("#char4").on("click", function() {
    $("#chosen_char").html("<img src='assets/images/lando.jpg' width='150px' height='150px' />");     
});




// enemy click events ////////////////////////////////////////////////////////////////////////

// Enemy 1
$("#enemy1").on("click", function() {
    $("#chosen_enemy").html("<img src='assets/images/boba_fett.jpg' width='150px' height='150px' />");     
});

// Enemy 2
$("#enemy2").on("click", function() {
    $("#chosen_enemy").html("<img src='assets/images/darth_maul.jpg' width='150px' height='150px' />");     
});

// Enemy 3
$("#enemy3").on("click", function() {
    $("#chosen_enemy").html("<img src='assets/images/darth_vader.jpg' width='150px' height='150px' />");     
});

// Enemy 4
$("#enemy4").on("click", function() {
    $("#chosen_enemy").html("<img src='assets/images/darth_sidious.jpg' width='150px' height='150px' />");     
});



// randomizations ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// randomize enemy values ////////////////////////////////////////////////////////////////////////

// randomize enemy Counter Attack
$("#enemy_damage").load("load", function() {
enemy1dmg = Math.floor((Math.random() * 100) + 1);    
enemy2dmg = Math.floor((Math.random() * 100) + 1);    
enemy3dmg = Math.floor((Math.random() * 100) + 1);    
enemy4dmg = Math.floor((Math.random() * 100) + 1);    
$("#enemyDamages").html("<h2>Attack Power: " + enemy1dmg + " " + enemy2dmg + " " + enemy3dmg + " " + enemy4dmg + "</h2>");
});


// randomize player damage
$("#player_damages").load("load", function() {
player1dmg = Math.floor((Math.random() * 100) + 1);    
player2dmg = Math.floor((Math.random() * 100) + 1);    
player3dmg = Math.floor((Math.random() * 100) + 1);    
player4dmg = Math.floor((Math.random() * 100) + 1);    
$("#player_damages").html("<h2>Attack Power: " + player1dmg + " " + player2dmg + " " + player3dmg + " " + player4dmg + "</h2>");
});

// randomize enemy hp
$("#enemy_damage").load("load", function() {
enemy1hp = Math.floor((Math.random() * 100) + 1);    
enemy2hp = Math.floor((Math.random() * 100) + 1);    
enemy3hp = Math.floor((Math.random() * 100) + 1);    
enemy4hp = Math.floor((Math.random() * 100) + 1);    
$("#enemyDamages").html("<h2>Attack Power: " + enemy1dmg + " " + enemy2dmg + " " + enemy3dmg + " " + enemy4dmg + "</h2>");
$("#enemyDamages").append("<h2>Health Points: " + enemy1hp + " " + enemy2hp + " " + enemy3hp + " " + enemy4hp + "</h2>");
});


// randomize player hp
$("#player_damages").load("load", function() {
player1hp = Math.floor((Math.random() * 100) + 1);    
player2hp = Math.floor((Math.random() * 100) + 1);    
player3hp = Math.floor((Math.random() * 100) + 1);    
player4hp = Math.floor((Math.random() * 100) + 1);    
$("#player_damages").html("<h2>Attack Power: " + enemy1dmg + " " + enemy2dmg + " " + enemy3dmg + " " + enemy4dmg + "</h2>");
$("#player_damages").append("<h2>Health Points: " + player1hp + " " + player2hp + " " + player3hp + " " + player4hp + "</h2>");
});





    // attempt at for loop
    // for (i=0; i<enemyDmgArr.length; i++) {
    //     enemyDmgArry[i] = Math.floor((Math.random() * 100) + 1);
    // }

    // console.log(enemyDmgArray);

// $("#enemy_damage").load("load", function() {
//     enemy2dmg = Math.floor((Math.random() * 100) + 1);    
//     $("#enemyDamages").append("<h1>" + enemy2dmg + "</h1>");

//     console.log(enemy1dmg);
//     // $("#rdmRedbelow").hide();
// });


