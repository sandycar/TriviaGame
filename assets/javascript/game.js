

var gameTimer 

$(document).ready(function(){

	$("#startButton").on('click', function(){
		$("#startButton").hide()
		$("#Questions").show()
	})
// 	$("#Questions").hide()


// // code for start button and hiding it after it's been clicked
// $('#startButton').on('click', function(){
// 	$("#Questions").show()
// 	gameTimer = setInterval(countDown, 1000)
	

	// var questionAnswers =  $('<div>')
	// var pTag = $('<p>hello</p>')
	// var multipleAnswers = $('<p>bye</p>')

	// questionAnswers.append(pTag)
	// $(document).append(questionAnswers)



var anws = [["Lion","Tiger", "Panther", "Mountain Lion"],
			["BuzzFeed","Wired", "Tech Crunch", "CNET"],
			["Snoop Dog","Kendrick Lamar","Too $hort", "SchoolBoy Q"],
			["The Grateful Dead", "The Sonics","The Velvet Underground","The Dead Kennedy's"]]

anws[0]
var ques = ["Apple has named it's previous 6 OS's after iconic locations of it's home state. In February 2012 Apple released Mac OS X 10.8, what was this version named after?",
			"Which one of these news outlets is not headquartered in the Bay Area?", 
			"In 2015 'Straight Outta Compton' was released in theaters featuring the rise and fall of west coast hip hop crew N.W.A. What other hip hop artists emerged straight out of Compton?", 
			"San Francisco was at the center of counter culture in the 1960s. Which band made it's start in this city during this time?"]



ques.forEach((e,i)=>{
var q = `
<p>${i+1}. ${e} </p>
			<form id = "question${i}">
			    <label class="radio-inline">
			    <input value= "${anws[i][0]}" type="radio" name="optradio1" > ${anws[i][0]}
			    </label>
			    <label class="radio-inline">
			      <input value= "${anws[i][1]}" type="radio" name="optradio1"> ${anws[i][1]}
			    </label>
			    <label class="radio-inline">
			      <input value = "${anws[i][2]}" type="radio" name="optradio1"> ${anws[i][2]}
			    </label>
			    <label class="radio-inline">
			      <input value = "${anws[i][3]}" type="radio" name="optradio1"> ${anws[i][3]}
			    </label>
			 </form>
`

$("#Questions").append(q)


})




})




// code for starting timer after start button has been clicked

// var gameClock = 5;
//  function countDown(){
//  	gameClock--;
//  	if (gameClock<=0){
//  		clearInterval(gameTimer)
//  		alert("Game Over")
//  	}
 		
// 		$('.clock').text(gameClock);


//  }

// // code for showing trivia questions and hiding after each one has been answered

// var correctAnswers = 0;
// var wrongAnswers = 0;
// var questionsAnswered = 0;

// // need an answer key - make an array

//  $.each($("input[name='optradio1']:checked"), function() {
//  	console.log(this.value)
      
//     });



// // code for showing done button after last question has been answered
// console.log("hello")
// // $('#doneButton').on('click', function(){

// })
