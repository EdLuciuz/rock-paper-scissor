const btnStart = document.querySelector('#start');
const container = document.querySelector('#btnContainer')
const card = document.querySelector('#card')

const btnSci = document.createElement('button')
const btnRock = document.createElement('button')
const btnPap = document.createElement('button')

const btnRestart = document.createElement('button')
btnRestart.textContent = 'Play Again'

const resultText = document.createElement('p')

btnRock.textContent = 'Rock';
btnSci.textContent = 'Scissor';
btnPap.textContent = 'Paper';

btnStart.addEventListener('click', () => {
    container.appendChild(btnRock);
    container.appendChild(btnPap);
    container.appendChild(btnSci);

    btnStart.remove();
});

let userPoint = 0;
let compPoint = 0;
let drawAmount = 0;

function removeButton() {
    btnPap.remove()
    btnRock.remove()
    btnSci.remove()
}

function showResult(result) {
    resultText.textContent = result
    resultText.classList.add('result')
    
    card.prepend(resultText)

    return resultText;
}




btnPap.addEventListener('click', () => {
    let userChoice = 'paper';

    game(userChoice,userPoint, compPoint, drawAmount);
    removeButton();
    showResult(result)
    container.appendChild(btnRestart)
});

btnRock.addEventListener('click', () => {
    let userChoice = 'rock';

    game(userChoice,userPoint, compPoint, drawAmount);
    removeButton();
    showResult(result)
    container.appendChild(btnRestart)
});

btnSci.addEventListener('click', () => {
    let userChoice = 'scissor';

    game(userChoice,userPoint, compPoint, drawAmount);
    removeButton();
    showResult(result)
    card.appendChild(btnRestart)
});

btnRestart.addEventListener('click', () => {
    container.appendChild(btnRock);
    container.appendChild(btnPap);
    container.appendChild(btnSci);

    btnRestart.remove();
    resultText.remove()
});



function game(userChoice) {

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

    getComputerChoice();
    finalResult(compChoice, userChoice);

    console.log(statement);

    if (result == "You Won") {userPoint= userPoint+1}
    if (result == "You Lost") {compPoint=compPoint+1}
    if (result == "Draw") {drawAmount=drawAmount+1}

    return (userPoint,compPoint, drawAmount, result);
}

function report(userPoint, compPoint, drawAmount) {
    alert(`Final Results : \n You : ${userPoint}\n Computer : ${compPoint}\n Draws : ${drawAmount}`);
}
