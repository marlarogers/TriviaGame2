$(document).ready(function() {
    console.log("ready!");

    alert("Click the Start button to play!")

    var number = 30;
    var intervalId;
  
    $("#startbutton").click(run);
  
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
   
    }
  function decrement() {
    number--;
  
    $("#timer").html("<h1>" + number + "</h1>");
  
    if (number <= 0) {
        $("#quiz").hide()
        checkScore()
        $("#timer").html("<h1>" + "Game Over!" + "</h1>");
        // console.log("game over")
    }
  }

    function checkScore () {

    var correctAnswers = ["b", "d", "a", "c", "c"];
    var userScore = 0;

    var q1 = $("input[name='question1']:checked").val();
    var q2 = $("input[name='question2']:checked").val();
    var q3 = $("input[name='question3']:checked").val();
    var q4 = $("input[name='question4']:checked").val();
    var q5 = $("input[name='question5']:checked").val();
    // console.log(q1, q2, q3, q4, q5)
    
    if (q1 == correctAnswers[0]) {
        userScore++
        }

    if (q2 == correctAnswers[1]) {
        userScore++
        }

    if (q3 == correctAnswers[2]) {
        userScore++
        }

    if (q4 == correctAnswers[3]) {
        userScore++
        }

    if (q5 == correctAnswers[4]) {
        userScore++
        }
    // console.log(userScore)
    $("#userscore").html("<h1>" + "You got " + userScore + " out of 5 questions correct!" + "</h1>");
        } 

$("#Grade").click(function() {
    $("#quiz").hide()

    checkScore()
    })
    

    

 });