
alert("connected!");
//var targetNumber = 53;
var counter;

var characters = [
  StarLord = {
     name: "StarLord",
     health: 500,
     Attack: 10,
     counterAttack: 5,
     imageUrl: "assets/images/starlord.png"
 },
    Gamora = {
     name: "Gamora",
     health: 750,
     Attack: 20,
     counterAttack: 20,
     imageUrl: "assets/images/gamora.png"
 
 },
 
     Nebula =  {
     name: "Nebula",
     health: 900,
     Attack: 6,
     counterAttack: 20,
     imageUrl: "assets/images/nebula.png"
 
 },
 
     Rocket = {
     name: "Rocket",
     health: 400,
     Attack: 12,
     counterAttack: 10,
     imageUrl: "assets/images/rocket.png"
 } 
 ];

 var areaRender= {};
function randomNumber(){
  targetNumber = Math.floor(Math.random() * 100) + 1;
$("#randomNumber").text(targetNumber);
}
// new **************************************************************
var renderOne = function (character, renderArea, charStatus) {
  var charDiv = $("<div class='character' data-name='"+character.name +"'>");
  var charName = $("<div class='character-name'>").text(character.name);
  var charImg = $("<img alt='image' class='character.image'>").attr("src", character.imageUrl);
  var charHealth = $("<div class='character-attack'>").text(character.Attack);
  charDiv.append(charName).append(charImg).append(charHealth);
  $(renderArea).append(charDiv);


}
var renderCharacters = function (charobj, areaRender) {
  if (areaRender === "#playerWrapper") {
      $(areaRender).empty();
      for (var key in charobj) {
          if (charobj.hasOwnProperty(key)){
              renderOne(charobj[key], areaRender);
          }
      }
  }
}
$(document).on("click", ".character", function (){
  var attackValue = $(this).attr("character-attack");
  attackValue = parseInt("attackValue");
  counter += attackValue;
  console.log(this)
  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});

//called functions

randomNumber ();
renderCharacters(characters, "#playerWrapper");






  