

var gameTimer 

$(document).ready(function(){

	$("#startButton").on('click', function(){
		$("#startButton").hide()
		$("#Questions").show()
	})
	$("#Questions").hide()


// // code for start button and hiding it after it's been clicked
$('#startButton').on('click', function(){
	$("#Questions").show()
	gameTimer = setInterval(countDown, 1000)
	})

	// var questionAnswers =  $('<div>')
	// var pTag = $('<p>hello</p>')
	// var multipleAnswers = $('<p>bye</p>')

	// questionAnswers.append(pTag)
	// $(document).append(questionAnswers)



var anws = [
	["Lion","Cougar", "Panther", "Mountain Lion"],
	["BuzzFeed","Wired", "Tech Crunch", "CNET"],
	["Snoop Dog","Kendrick Lamar","Too $hort", "SchoolBoy Q"],
	["The Grateful Dead", "The Sonics","The Velvet Underground","The Dead Kennedy's"],
	["Santa Cruz", "San Francisco", "San Diego", "Anaheim"],
	["San Mateo County", "Monterey County", "Marin County", "Santa Cruz County"],
	["Glendale", "Carmel", "Santa Rosa", "Novato"],
	["15", "7", "19", "10"],
	["Fortune cookie", "Chocolate chip cookie", "Oreo", "Snickerdoodle"],
	["Mount Whitney", "Mount Shasta", "Mount Tamalpais", "Mount Diablo"]
];

anws[0]
var ques = ["Apple has named it's previous 6 OS's after iconic locations of it's home state. In February 2012 Apple released Mac OS X 10.8, what was this version named after?",
			"Which one of these news outlets is not headquartered in the Bay Area?", 
			"In 2015 'Straight Outta Compton' was released in theaters featuring the rise and fall of west coast hip hop crew N.W.A. What other hip hop artists emerged straight out of Compton?", 
			"San Francisco was at the center of counter culture in the 1960s. Which band made it's start in this city during this time?",
			"What city in California did the shoe brand 'Vans' open their business?", 
			"Alfred Hitchock's first U.S. Film, 'Rebecca' took place in which California coastal county?",
			"Clint Eastwood directed many iconic films. What city in California was he the mayor of?", 
			"How many professional sports teams does California have?",
			"Which cookie was invented in California?",
			"Death Valley is best known for being the hottest and lowest point in North America at 86m below sea level. Where's is the highest summit in the lower 48 states?"];



ques.forEach((e,i)=>{
	// debugger
	var q = `
		<p>${i+1}. ${e} </p>
			<div id = "question${i}">
			    <label class="radio-inline">
			    <input value= "${anws[i][0]}" required type="radio" name="answer${i}" > ${anws[i][0]}
			    </label>
			    <label class="radio-inline">
			      <input value= "${anws[i][1]}" required type="radio" name="answer${i}"> ${anws[i][1]}
			    </label>
			    <label class="radio-inline">
			      <input value = "${anws[i][2]}" required type="radio" name="answer${i}"> ${anws[i][2]}
			    </label>
			    <label class="radio-inline">
			      <input value = "${anws[i][3]}" required type="radio" name="answer${i}"> ${anws[i][3]}
			    </label>
			 </div
	`

	$("#Questions").append(q)

})
var submitButton = $("<button>").attr("id","submit").attr("class","btn btn-warning").text("Submit")
$("#Questions").append(submitButton);


})

submitButton.on('click', function(){
	event.preventDefault();
	alert('hi')
})

// var incorrect = 0
// var correct = 0
// function checker(){
// 	$.each($("input[name='answer-0':checked]"), function() {
// 	 if ($(this).val()===anws[0][3]){
// 	 	correct++
// 	 }else {
// 	 	incorrect++
// 	 }
// 	alert(`correct ${correct} incorrect ${incorrect}`)
     
//     });

// }

// var correctAnswers= [
// 					"Mountain Lion",
// 					"BuzzFeed", 
// 					"Kendrick Lamar", 
// 					"The Dead Kennedy's",
// 					"Anaheim", 
// 					"Monterey County", 
// 					"Carmel", 
// 					"19", 
// 					"Fortune cookie", 
// 					"Mount Whitney"]



$("#Questions").on("change", "#question9", function(){
	alert("Hello")
	$('#doneButton').on('click', function(){
		for (var i=0; i<10; i++){
			console.log(

				$(`input[name='answer${i}']:checked`).val()
				// $("input[name='gender']:checked").val()
			

			)

		}
	})
})

// code for starting timer after start button has been clicked

// var gameClock = 30;
//  function countDown(){
//  	gameClock--;
//  	if (gameClock<=0){
//  		checker()
//  		clearInterval(gameTimer)
//  		alert("Game Over")
//  	}
 		
// 		$('.clock').text(gameClock);
// }

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
// // 

// })
