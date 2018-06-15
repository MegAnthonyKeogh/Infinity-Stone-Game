
 
//assigning variables 
  var starlord = $("#starlord")
  var gamora = $("#gamora")
  var nebula = $("#nebula")
  var rocket = $("#rocket")

  //setting counters
  var wins = 0;
  var losses = 0;
  var counter = 0;



//adding classes and values 
    starlord.attr("data-value", 5);
    starlord.addClass("character");
    gamora.attr("data-value", 17);
    gamora.addClass("character");
    nebula.attr("data-value", 7);
    nebula.addClass("character");
    rocket.attr("data-value", 13);
    rocket.addClass("character");
  
  $(document).on("click", ".character", function (){
    var attackValue = $(this).attr("data-value");
    attackValue = parseInt(attackValue);
    console.log(this);
    counter += attackValue;
    console.log("current counter" + counter);
    
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#counter").text("New score: " + counter);
  
    if (counter === targetNumber) {
        wins++;
      $("#counter").text("You win!");
    }
  
    else if (counter >= targetNumber) {
        losses++;
      $("#counter").text("You lose!!");
      
    }

  });
//*******************************************************

function randomNumber(){
    targetNumber = Math.floor(Math.random() * 100) + 1;
  $("#randomNumber").text(targetNumber);
  }

  $("button").on("click", function(){
     
    randomNumber();
     
    // reset counters
    counter = 0
    
  })
   

  
  //appending counter to site. 
    $("#counter").append(counter)
    $(".wins").append("You have "+ wins + "wins and " + losses + " losses")
  
  //called functions
  
  randomNumber ();
 
  
  
  