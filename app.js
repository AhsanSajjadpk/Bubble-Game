var score = 0;
var timer = 60
var hitval;
var targetValue;

function makeBubble() {

    var mybubbles = ''
    for (var i = 0; i <= 135; i++) {

        var r = Math.random() * 30
        var pr = Math.ceil(r)

        mybubbles += `<div class="bubble">${pr}</div>`

    }

    document.querySelector('#bot').innerHTML = mybubbles;
}

function startTimer() {


    var mytimer = setInterval(function () {
        timer--;
        document.querySelector('#time').textContent = timer
        if (timer == 0) {
            clearInterval(mytimer);
            document.querySelector("#bot").innerHTML = `<h1>Game Over !! <br><br> Your Score : ${score}</h1>`
        }

    }, 1000)


}

function hitValue() {

    var r = Math.random() * 30
    hitval = Math.ceil(r)
    document.querySelector('#hitval').textContent = hitval;


}

function increaseScore() {
    score += 10;
    document.querySelector('#scores').textContent = score;

}

function flowOfGame() {
    document.querySelector("#bot").addEventListener("click", function (details) {

        targetValue = Number(details.target.textContent)

        if (targetValue == hitval) {
            increaseScore()
            makeBubble()
            hitValue()


        }

    })
}
function skipIt() {
    hitValue();
    makeBubble();
}



hitValue();
startTimer();
makeBubble();
flowOfGame()













