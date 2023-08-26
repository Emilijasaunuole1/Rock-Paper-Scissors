let score = JSON.parse(localStorage.getItem('score')) || {wins: 0, losses: 0, ties: 0}; //skaiciuokle atsakymu //tam kad issisaugotu rez perkrovus psl


updateScoreElement();




/*if (!score) {score = {wins: 0, losses: 0, ties: 0};}*/


    //function. we will change the move to the parameter
    function playGame(playerMove) {

    const computerMove = pickComputerMove();
  
    
    //2. COMPUTER COMPARE THE MOVES TO GET THE RESULT//
     //with a rock:






    let result = '';

    if (playerMove === 'scissors') { if (computerMove === 'rock' ) { result= 'You loose.';}   //scissors and rock, you loose
    else if (computerMove === 'paper') {result = 'You win.';} //scissors and paper, you win
    else if (computerMove === 'scissors') {result= 'Tie.';} }


    else if (playerMove === 'paper') { if (computerMove === 'rock' ) { result= 'You win.';}   //paper and rock, you win
    else if (computerMove === 'paper') {result = 'Tie.';} //paper and paper, equal
    else if (computerMove === 'scissors') {result= 'You loose.';} }


    else if (playerMove === 'rock') {if (computerMove === 'rock' ) { result= 'Tie.';}   //lygus rezultatas
    else if (computerMove === 'paper') {result = 'You lose.';} //rock and paper, you loose
    else if (computerMove === 'scissors') {result= 'You win.';} }

    

    if (result === 'You win.') { score.wins += 1; } //skaiciuokle rezultato
    else if (result === 'You lose.') {score.losses +=1;}
    else if (result === 'Tie.') {score.ties += 1;}

    

localStorage.setItem('score', JSON.stringify(score)); //tam kad isliktu rez perkrovus psl


updateScoreElement();
document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = 
`You 
<img src="${playerMove}-emoji.png" 
class="move-icon">
        <img src="${computerMove}-emoji.png" 
        class="move-icon">
        Computer`;}








  
//3. DISPLAY THE RESULT IN A POPUP// skaiciuokle
alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} 
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);


function updateScoreElement() {document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;  //written on the page
}




//we use function to reuse code
function pickComputerMove ()

{
     //1. COMPUTER RANDOMLY SELECTS THE MOVE//
    const randomNumber = Math.random(); //generates a random number between 0 and 1

    let computerMove= '';

    if (randomNumber >=0 && randomNumber < 1/3) {computerMove= 'rock'} //we check if the randomNumber is more than 0 and if rN is less than 1/3
    if (randomNumber >= 1/3 && randomNumber < 2/3) {computerMove= 'paper'} 
    //we check if the randomNumber is more than 1/3 and if rN is less than 2/3
    else if (randomNumber >= 2/3 && randomNumber < 1) {computerMove= 'scissors'} 
    //we check if the randomNumber is more than 2/3 and if rN is less than 1
    console.log(computerMove);
   
    //2. COMPUTER COMPARE THE MOVES TO GET THE RESULT//
    //with a rock:

return computerMove;
} 