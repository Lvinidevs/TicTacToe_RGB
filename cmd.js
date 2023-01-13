const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "X";

let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function init() {
selected = [];

currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
});
}

init();

function newMove(e) {
const index = e.target.getAttribute("data-i");
e.target.innerHTML = player;
e.target.removeEventListener("click", newMove);
selected[index] = player;

setTimeout(() => {
    check();
}, [100]);

player = player === "X" ? "O" : "X";
currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

function check() {
let playerLastMove = player === "X" ? "O" : "X";

const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
alert("O JOGADOR '" + playerLastMove + "' GANHOU!");
init();
    return;
    }
}

if (selected.filter((item) => item).length === 9) {
    alert("DEU EMPATE!");
    init();
    return;
}
}

function generateColors(){
    const chars = '0123456789ABCDEF'
    let color = '#'

    for(let i = 2; i < 10; i++){
        color += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return color;
    
}

document.getElementById('rgb-action').addEventListener('click', () => {
    
    for(let i = 0;i < 9; i++){
        let div_color = document.getElementById(`RGB-${i+1}`);
        div_color.style.backgroundColor = generateColors()
    }
})
"use strict"
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;

function start(){
    cron = setInterval(timer ,tempo);
}

function timer(){

    ss++;
    if(ss == 60){
    ss = 0;
    mm++;
    if(mm == 60){
    mm = 0;
    hh++;
    }
    }
    var format = (hh < 10 ? '0' + hh :hh) + ':' + (mm < 10 ? '0' + mm : mm) +  ':' + (ss  < 10 ? '0' + ss : ss ); 
    document.getElementById('counter').innerHTML = format;
}

function stop(){
    clearInterval(cron)
}