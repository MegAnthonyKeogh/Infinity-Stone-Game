
var counter = 0;

var characters = [
  StarLord = {
     name: "StarLord",
     Attack: 10,
     imageUrl: "assets/images/starlord.png"
 },
    Gamora = {
     name: "Gamora",
     Attack: 20,
     imageUrl: "assets/images/gamora.png"
 
 },
 
     Nebula =  {
     name: "Nebula",
     Attack: 6,
     imageUrl: "assets/images/nebula.png"
 
 },
 
     Rocket = {
     name: "Rocket",
     Attack: 12,
     imageUrl: "assets/images/rocket.png"
 } 
 ];
   

 var areaRender= {};
function randomNumber(){
  targetNumber = Math.floor(Math.random() * 100) + 1;
$("#randomNumber").text(targetNumber);
}
// new **************************************************************
var renderOne = function (character, renderArea, ) {
  var charDiv = $("<div class='character' data-name='"+character.name +"'>");
  var charName = $("<div class='character-name'>").text(character.name);
  var charImg = $("<img alt='image' class='character.image'>").attr("src", character.imageUrl);
  var charAttack = $("<div class='data-attack'>").text(character.Attack);
  charDiv.append(charName).append(charImg).append(charAttack);
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
  var attackValue = parseInt($(this).attr("data-attack"));
  counter += attackValue;
  
  // All of the same game win-lose logic applies. So the rest remains unchanged.
  $("#counter").text("New score: " + counter);

  if (counter === targetNumber) {
    $("#counter").text("You win!");
  }

  else if (counter >= targetNumber) {
    $("#counter").text("You lose!!");
  }

});

//called functions

randomNumber ();
renderCharacters(characters, "#playerWrapper");






  