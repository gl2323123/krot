let getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let wins = parseInt(deadMole.textContent);
let lost = parseInt(lostMole.textContent);

function Game(deadMole, lostMole) {
    console.log(deadMole, lostMole);
    if (deadMole === 10) {
        alert("Вы победили!");
        location.reload();
    } else if (lostMole === 5) {
        alert("Вы приграли!");
        location.reload();
    };
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            wins += 1;
            deadMole.textContent = wins;
        } else {
            lost += 1;
            lostMole.textContent = lost;
        };
        Game(wins, lost);
    };
};