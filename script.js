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

const userChoice = (prompt("Choose An Option")).toLowerCase();

getComputerChoice();

finalResult(compChoice, userChoice);
console.log(statement);