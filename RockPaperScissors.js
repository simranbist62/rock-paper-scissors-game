 let userScore=0;
 let computerScore=0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");

 const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock, paper, scissors
    const randomGuess = Math.floor((Math.random()*3))
    return options[randomGuess];
 }

 const gameDraw = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw. Play again☹️";
    msg.style.backgroundColor = "#081b31"
 }

 const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin===true) {
        userScore++;
        userScorePara.innerText=userScore;
       msg.innerText=`You win.🎉 Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        compScorePara.innerText=computerScore;
        msg.innerText=`You lose.😞 ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 }

 const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    //computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if (userChoice === compChoice){
        gameDraw();
    }
    else {
        let userWin = true;
        if (userChoice==="rock") {
            //scissors, paper
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //scissors, rock
            userWin = compChoice==="scissors" ? false : true;
        }
        else{
            //rock, paper
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
 }

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");  
    playGame(userChoice);
    })
 })