
// // <!-- Sound Effects -->
// var fireSound = $(".fire-sound");
// var kittySound = new Audio("./assets/sounds/kitten.mp3");
// var gunSound = new Audio("gun.mp3");
// var fireSound = new Audio("fire.mp3");



// Monster Images
var images = ['badmoth.png', 'scarymonster.png', 'dino.png', 'godzilla.png', 'oneeye.png', 'pumpkin.png'];
$('#monster-img').html(('<img class="monster-1" src="assets/images/monsters/' + images[Math.floor(Math.random() * images.length)] + '">'));

var monsterHealth = Math.floor(Math.random()*250+50);



var damage = 0;
var wins = 0;
var losses = 0



var fire = Math.floor(Math.random()*15+1);
var kitty = Math.floor(Math.random()*15+1);
var grenade = Math.floor(Math.random()*15+1);
var machineGun = Math.floor(Math.random()*15+1);




function reset(){

$('#monster-img').html(('<img class="monster-1" src="assets/images/monsters/' + images[Math.floor(Math.random() * images.length)] + '">'));
// $('<img class="monster-1" src="assets/images/monsters/' + images[Math.floor(Math.random() * images.length)] + '">').prependTo('#monster-img');
monsterHealth = Math.floor(Math.random()*250+50);
$("#monsters-health").text(monsterHealth)
var fire = Math.floor(Math.random()*15+5);
var kitty = Math.floor(Math.random()*15+5);
var grenade = Math.floor(Math.random()*15+5);
var machineGun = Math.floor(Math.random()*15+5);
};


function winner(){
alert("You have done! You have saved the city!");
wins++;
$("#wins").text(wins)
reset();
};

function loser(){
alert("DEATH AND UTTER DESTRUCTION You have been hasty with your resources and the sneaky Russians have stolen NYC!")
losses++;
$("#losses").text(losses)
reset();
};

$( document ).ready(function() {

$("#monsters-health").text(monsterHealth);


//This chooses a random monster out of the array to display 








//On click functions with if then statements...

$('#fire').on('click', function(){
    document.getElementById('fire-sound').play()
    damage = damage + fire;
    console.log(damage);
    monsterHealth = monsterHealth - fire;
    $("#monsters-health").text(monsterHealth)
    
    if (monsterHealth === 0) {
        $('.monster-1').remove();
        winner();
        // reset();
        

      
    }

    else if (monsterHealth < 0){
        $('.monster-1').remove();
        loser();
        // reset();
        
     
    }


});

$('#grenade').on('click', function(){
    document.getElementById('grenade-sound').play()
    damage = damage + grenade;
    console.log(damage);
    monsterHealth = monsterHealth - grenade;
    $("#monsters-health").text(monsterHealth)
   
    if (monsterHealth === 0) {
        $('.monster-1').remove();
        winner();
    }

    else if (monsterHealth < 0){
        $('.monster-1').remove();
        loser();
    }


});

$('#kitty').on('click', function(){
    document.getElementById('kitty-sound').play()
  damage = damage + kitty;
    console.log(damage);
    monsterHealth = monsterHealth - kitty;
    $("#monsters-health").text(monsterHealth)
   

    if (monsterHealth === 0) {
        $('.monster-1').remove();
        winner();
    }

    else if (monsterHealth < 0){
        $('.monster-1').remove();
        loser();
    }

});

$('#machine-gun').on('click', function(){
    document.getElementById('gun-sound').play()
   damage = damage + grenade;
    console.log(damage);
    monsterHealth = monsterHealth - grenade;
    $("#monsters-health").text(monsterHealth)
   

    if (monsterHealth === 0) {
        $('.monster-1').remove();
        winner();
    }

    else if (monsterHealth < 0){
        $('.monster-1').remove();
        loser();
    }

});


    

     




});