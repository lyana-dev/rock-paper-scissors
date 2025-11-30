// initialise variables with the default values (constructors)
let gameRound = 0; //setting a new game
const maxRound = 5;
let stopGame = false;
let userChoices = []; //array to store user's choices
let computerChoices = [] //array for computer's choices

function play(userChoice) {
    /* The return statement ends function execution and specifies a value to be returned to the function caller.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return */
    // chceck the condition of the game first
    if (stopGame == true){
        return;
    } 

    if (gameRound >= maxRound) {
        document.getElementById("result").innerHTML = "Game over! You have played 5 rounds...";
        hide();
        return;
    }
    
    // every time the play button is clicked, gameRound counter adds 1 
    gameRound = gameRound + 1;

    let choice = ["Rock", "Paper", "Scissors"];
    var computerChoice = choice[Math.floor(Math.random() * 3)];
    let displayResults = "";

    // storing the user's & computer's guesses in the array 
    userChoices.push(userChoice);
    computerChoices.push(computerChoice);

    // checking for a tie
    if (userChoice == computerChoice) {
        displayResults = "Hehe it's a tie...<br>Your choice: " + userChoice + "<br>Computer choice: " + computerChoice;
    }
    else {

        // initialising the variables
        let i = 0;
        let win = false;

        // going through all possible win scenarios
        while (i < 3) {
            if (i == 0 && userChoice == "Rock" && computerChoice == "Scissors") {
                win = true;
            }
            else if (i == 1 && userChoice == "Paper" && computerChoice == "Rock") {
                win = true;
            }
            else if (i == 2 && userChoice == "Scissors" && computerChoice == "Paper") {
                win = true;
            }

            i = i + 1;
        }

        // what happens if the user wins (from the above while loop)
        if (win == true) {
            displayResults = "Congratulations, you win!<br>Your choice: " + userChoice + "<br>Computer choice: " + computerChoice
            // stopping the game once the user wins
            stopGame = true;
            hide();
        }
        // what happens if the user loses
        else {
            displayResults = "Sorry, you lose...<br>Your choice: " + userChoice + "<br>Computer choice: " + computerChoice;
        }
    }

    if (gameRound >= maxRound || stopGame == true) {
        displayResults = displayResults + "<br><br>Game over!<br>You played " +gameRound +" round(s)";
        displayResults = displayResults + "<br><br>Your choices: " + userChoices.toString() + "<br>Computer's choices: " + computerChoices.toString();
        hide();
    }

    // displaying the results
    document.getElementById("result").innerHTML = displayResults;
}

// hiding the choice question and the three buttons
function hide() {
    document.getElementById("choose").style.visibility = "hidden";
    document.getElementById("rockButton").style.visibility = "hidden";
    document.getElementById("paperButton").style.visibility = "hidden";
    document.getElementById("scissorsButton").style.visibility = "hidden";
}
