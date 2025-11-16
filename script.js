function play(userChoice) {
    var choice = ["Rock", "Paper", "Scissors"];
    /* Generating random numbers, rounding them down to an integer and story as an array src=https://dev.to/kanaga_vimala_66acce9cf6e/understanding-mathrandom-mathfloor-and-arrays-in-javascript-mkl */
    var computerChoice = choice[Math.floor(Math.random() * 3)];

    if (userChoice == computerChoice) {
        document.getElementById("result").innerHTML = "Hehe it's a tie...<br>Your choice: " + userChoice + "<br>Computer choice: " + computerChoice;
        hide();

    }

    else if (userChoice == "Rock") {
        if (computerChoice == "Scissors") {
        document.getElementById("result").innerHTML = "Congratulations, you win!<br>Your choice: Rock<br>Computer choice: Scissors";
        hide();
        } 
        else {
        document.getElementById("result").innerHTML = "Sorry, you lose...<br>Your choice: Rock<br>Computer choice: Paper";
        hide();
        }
    }

    else if (userChoice == "Paper") {
        if (computerChoice == "Rock") {
        document.getElementById("result").innerHTML = "Congratulations, you win!<br>Your choice: Paper<br>Computer choice: Rock";
        hide();
        }
        else {
        document.getElementById("result").innerHTML = "Sorry, you lose...<br>Your choice: Paper<br>Computer choice: Scissors";
        hide();
        }
    }

    else if (userChoice == "Scissors") {
        if (computerChoice == "Paper") {
        document.getElementById("result").innerHTML = "Congratulations, you win!<br>Your choice: Scissors<br>Computer choice: Paper";
        hide();
        }
        else {
        document.getElementById("result").innerHTML = "Sorry, you lose...<br>Your choice: Scissors<br>Computer choice: Rock";
        hide();
        }
    }
}

// hiding the choice question and the three buttons
function hide() {
    document.getElementById("choose").style.visibility = "hidden";
    document.getElementById("rockButton").style.visibility = "hidden";
    document.getElementById("paperButton").style.visibility = "hidden";
    document.getElementById("scissorsButton").style.visibility = "hidden";
}
