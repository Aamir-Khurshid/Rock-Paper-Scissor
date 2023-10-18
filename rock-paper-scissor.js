let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Draw: 0
}

scoreElement();
/* if(score===null){
    score = {
    Wins: 0,
    Losses: 0,
    Draw: 0
}
}
console.log(); */

function playGame(playerMove) {
    let computer = pickCompMove();
    let result = ''
    if (playerMove === 'scissors') {
        if (computer === 'paper') {
            result = 'You Win'
        }
        else if (computer === 'scissors') {
            result = 'Draw'
        }
        else {
            result = 'You Lose'
        }
    }
    else if (playerMove === 'paper') {
        if (computer === 'paper') {
            result = 'Draw'
        }
        else if (computer === 'scissors') {
            result = 'You Lose'
        }
        else {
            result = 'You Win'
        }
    }
    else if (playerMove === 'rock') {
        if (computer === 'paper') {
            result = 'You Lose'
        }
        else if (computer === 'scissors') {
            result = 'You Win'
        }
        else {
            result = 'Draw'
        }
    }

    if (result === 'You Win') {
        score.Wins++;
    }
    else if (result === 'You Lose') {
        score.Losses++;
    }
    else if (result === 'Draw') {
        score.Draw++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    scoreElement();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-move').innerHTML = `You <img src="image/${playerMove}-emoji.png" class="move-icon">   <img src="image/${computer}-emoji.png" class="move-icon"
    > System`;
}

function scoreElement(){
    document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.Wins}, Loss: ${score.Losses}, Draw: ${score.Draw}`;
}

function pickCompMove() {
    let computer = ''
    const randomcomp = Math.random();
    if (randomcomp < 1 / 3) {
        computer = 'rock';
    }
    else if (randomcomp < 2 / 3 && randomcomp > 1 / 3) {
        computer = 'paper';
    }
    else {
        computer = 'scissors';
    }
    return computer;
}