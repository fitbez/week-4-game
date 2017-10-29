$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
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
  // creats an image div
  // var gifImage =  $(document.createElement('img'))
  var gifImage =  $(document.createElement('img'));
             { id: 'gif';
               src: 'assets/images/giphy.gif';
               width: 300;
             }
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
function yay(){
// alert("You won!");

  wins++;
  $('#numberWins').text(wins);
  reset();
}
//addes the losses to the userTotal
function loser(){
// alert ("You lose!");

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
          yay();
          // document.getElementById('gif').innerHTML=("You Won!");
          $("#gif").html("<img id='theImg' src='assets/images/giphy.gif'/>");
        }
        else if ( userTotal > Random){
          loser();
          // document.getElementById('gif').innerHTML=("You lose!");
          $("#gif").html("<img id='theImg' src='assets/images/giphy1.gif'/>");
        }
  })
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
        if (userTotal == Random){
          yay();
          // document.getElementById('gif').innerHTML=("You Won!");
          $("#gif").html("<img id='theImg' src='assets/images/giphy.gif'/>");

        }
        else if ( userTotal > Random){
          loser();
          // document.getElementById('gif').innerHTML=("You lose!");
          $("#gif").html("<img id='theImg' src='assets/images/giphy1.gif'/>");
        }
  })
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//sets win/lose conditions
          if (userTotal == Random){
          yay();
          // document.getElementById('gif').innerHTML=("You Won!");
          $("#gif").html("<img id='theImg' src='assets/images/giphy.gif'/>");
        }
        else if ( userTotal > Random){
          loser();
          // document.getElementById('gif').innerHTML=("You lose!");
          $("#gif").html("<img id='theImg' src='assets/images/giphy1.gif'/>");

        }
  })
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

          if (userTotal == Random){
          yay();
          // document.getElementById('gif').innerHTML=("You Won!");
          $("#gif").html("<img id='theImg' src='assets/images/giphy.gif'/>");

        }
        else if ( userTotal > Random){
          loser();
          // document.getElementById('gif').innerHTML=("You lose!");

     $("#gif").html("<img id='theImg' src='assets/images/giphy1.gif'/>");
        }
  });
});
