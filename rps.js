let i = 0;
let pscore = 0;
let cscore = 0;
const ips = document.getElementById("pscore");
const ics = document.getElementById("cscore");
const result = document.getElementById("result-id");
const won = document.getElementById("won-id");
const replay = document.getElementById("replay-but-id");
const img1 = document.querySelector("img");
const options = document.querySelector(".option");

function showRules() {
    if (i == 0) {
        img1.setAttribute("src", "ad.svg");
        document.getElementById("show").style.display = "unset";
        i = 1;
    }
    else {
        img1.setAttribute("src", "ar.svg");
        document.getElementById("show").style.display = "none";
        i = 0;
    }

}

function checkWon() {
    if (pscore == 3 || cscore == 3) {
        options.style.display = "none";
        if (pscore >= 3) {
            won.innerHTML = "Player has won the game!";
        }
        else {
            won.innerHTML = "Computer has won the game!";
        }
        replay.style.display = "flex";
    }

}

function rock() {
    const com = Math.floor(Math.random() * 3);
    if (pscore < 3 && cscore < 3) {

        if (com == 0) {
            result.innerHTML = "It's a tie! Both chose Rock";
        }
        else if (com == 1) {
            result.innerHTML = "Computer wins! Paper beats Rock ";
            cscore++;
            ics.innerHTML = "" + cscore;

        }
        else if (com == 2) {
            result.innerHTML = "Player wins! Rock beats Scissors";
            pscore++;
            ips.innerHTML = "" + pscore;
        }
    }
    checkWon();
}

function Paper() {
    const com = Math.floor(Math.random() * 3);
    if (pscore < 3 && cscore < 3) {

        if (com == 1) {
            result.innerHTML = "It's a tie! Both chose Paper";
        }
        else if (com == 2) {
            result.innerHTML = "Computer wins! Scissors beats Paper ";
            cscore++;
            ics.innerHTML = "" + cscore;

        }
        else if (com == 0) {
            result.innerHTML = "Player wins! Paper beats Rock";
            pscore++;
            ips.innerHTML = "" + pscore;
        }
    }
    checkWon();
}

function Scissors() {
    const com = Math.floor(Math.random() * 3);
    if (pscore < 3 && cscore < 3) {

        if (com == 2) {
            result.innerHTML = "It's a tie! Both chose Scissors";
        }
        else if (com == 0) {
            result.innerHTML = "Computer wins! Rock beats Scissors ";
            cscore++;
            ics.innerHTML = "" + cscore;

        }
        else if (com == 1) {
            result.innerHTML = "Player wins! Scissors beats Paper";
            pscore++;
            ips.innerHTML = "" + pscore;
        }
    }
    checkWon();
}

function Reset() {
    result.innerHTML = " ";
    won.innerHTML = " ";
    replay.style.display = "none";
    pscore = 0;
    cscore = 0;
    ips.innerHTML = "" + pscore;
    ics.innerHTML = "" + cscore;
    options.style.display = "flex";

}




