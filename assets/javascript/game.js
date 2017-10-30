
$( document ).ready(function(){
  // jquery_ slide_toggle
  //
  $("#instruction").click(function(){
    $("#panel").slideToggle("slow");
  });
  // Selects a random number between 19 - 120 to be shown at the start of the game
  //
  var Random=Math.floor(Math.random()*101+19)
  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  // Setting up random numbers for each crystal
  // Random number has to be between 1 - 12
  //
  var userTotal= 0;
  var wins= 0;
  var losses = 0;

  //  Declaring variables for tallies
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      }
//adds the wins to the userTotal
function winer(){
 wins++;
  $('#numberWins').text(wins);
  reset();
}
//addes the losses to the userTotal
function loser(){
  losses++;
  $('#numberLosses').text(losses);
  reset()
}
//sets up click for crystals
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
          //sets win/lose conditions
        if (userTotal == Random){
          winer();
          // lets the player know  wins  with gif image
          $("#gif").html("<img id='theImg' src='assets/images/giphy.gif'/>");
        }
        else if ( userTotal > Random){
          loser();
         // lets the player know losses with gif image
          $("#gif").html("<img id='theImg' src='assets/images/giphy1.gif'/>");
        }
  })
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
         //sets win/lose conditions
        if (userTotal == Random){
          winer();
          // lets the player know  wins  with gif image
          $("#gif").html("<img id='theImg' src='assets/images/giphy.gif'/>");
        }
        else if ( userTotal > Random){
          loser();
          // lets the player know losses with gif image
          $("#gif").html("<img id='theImg' src='assets/images/giphy1.gif'/>");
        }
  })
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
        //sets win/lose conditions
          if (userTotal == Random){
          winer();
          // lets the player know  wins  with gif image
          $("#gif").html("<img id='theImg' src='assets/images/giphy.gif'/>");
        }
        else if ( userTotal > Random){
          loser();
          // lets the player know losses with gif image
          $("#gif").html("<img id='theImg' src='assets/images/giphy1.gif'/>");
        }
  })
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
         //sets win/lose conditions
          if (userTotal == Random){
          winer();
        // lets the player know  wins  with gif image
          $("#gif").html("<img id='theImg' src='assets/images/giphy.gif'/>");

        }
        else if ( userTotal > Random){
          loser();
        // lets the player know losses with gif image

     $("#gif").html("<img id='theImg' src='assets/images/giphy1.gif'/>");
        }
  });
});
