function game(userPoint, compPoint, drawAmount) {

    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);
    
        if (randomNumber == 0) {compChoice = "rock"};
        if (randomNumber == 1) {compChoice = "paper"};
        if (randomNumber == 2) {compChoice = "scissor"};
    
        return compChoice;
    }
    
    function finalResult(compChoice, userChoice) {
        //Rock
        if (userChoice == "rock") {
            if (compChoice == "scissor") {result = "You Won"}
            if (compChoice == "paper") {result = "You Lost"}
        }
        //Paper
        if (userChoice == "paper") {
            if (compChoice == "rock") {result = "You Won"}
            if (compChoice == "scissor") {result = "You Lost"}
        }
        //Scissor
        if (userChoice == "scissor") {
            if (compChoice == "paper") {result = "You Won"}
            if (compChoice == "rock") {result = "You Lost"}
        }
        //Draw
        if (userChoice == compChoice) {result = "Draw"}
    
        statement = `${result}! Opponent chose ${compChoice}`;
    
        return (statement, result);
    }

    let userChoice = (prompt("Choose An Option")).toLowerCase();

    getComputerChoice();
    finalResult(compChoice, userChoice);

    console.log(statement);

    if (result == "You Won") {userPoint=+1}
    if (result == "You Lost") {compPoint=+1}
    if (result == "Draw") {drawAmount=+1}

    return (userPoint,compPoint, drawAmount);
}

function report(userPoint, compPoint, drawAmount) {
    console.log(`Final Results : \n You : ${userPoint}\n Computer : ${compPoint}\n Draws : ${drawAmount}`);
}

userPoint = 0;
compPoint = 0;
drawAmount = 0;

game(userPoint, compPoint, drawAmount);
game(userPoint, compPoint, drawAmount);
game(userPoint, compPoint, drawAmount);
game(userPoint, compPoint, drawAmount);
game(userPoint, compPoint, drawAmount);

report(userPoint, compPoint, drawAmount);