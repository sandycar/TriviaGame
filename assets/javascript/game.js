

var gameTimer 

$(document).ready(function(){
	$("#Questions").hide()
// code for start button and hiding it after it's been clicked
$('#startButton').on('click', function(){
	$("#Questions").show()
	gameTimer = setInterval(countDown, 1000)
	
})




// code for starting timer after start button has been clicked

var gameClock = 5;
 function countDown(){
 	gameClock--;
 	if (gameClock<=0){
 		clearInterval(gameTimer)
 		alert("Game Over")
 	}
 		
		$('.clock').text(gameClock);


 }

// code for showing trivia questions and hiding after each one has been answered

var correctAnswers = 0;
var wrongAnswers = 0;
var questionsAnswered = 0;

// need an answer key - make an array

 $.each($("input[name='optradio1']:checked"), function() {
 	console.log(this.value)
      
    });



// code for showing done button after last question has been answered
console.log("hello")
// $('#doneButton').on('click', function(){

})
