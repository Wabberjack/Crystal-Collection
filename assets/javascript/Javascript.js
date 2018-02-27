$(document).ready(function){
  var Random=Math.floor(Math.random()*61*19)

}
  
$('#MysteryNumber').text(Random);

var num1= Math.floor(Math.random()*13+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*6+1)
var num4= Math.floor(Math.random()*17+1)

var wins =0;
var losses =0;


function you have won(){
  alert("you win")
  wins++; 
  $('#Wins').text(wins);
  reset();
}
function you lose(){
  alert("you lose")
  losses++; 
  $('#Losses').text(wins);
  reset();

function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*13+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*6+1);
      num4= Math.floor(Math.random()*17+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 

      $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          bigWinner();
        }
        else if ( userTotal > Random){
          loser();
        }   

        $('#two').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          bigWinner();
        }
        else if ( userTotal > Random){
          loser();
        }   

        $('#three').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          bigWinner();
        }
        else if ( userTotal > Random){
          loser();
        }   

        $('#four').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          bigWinner();
        }
        else if ( userTotal > Random){
          loser();
        }   