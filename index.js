let scorJucator = 0;
let scorCalculator = 0;
const alegeri = ["Rock", "Scissors", "Paper"];


let alegereCalculator = GenerarePC();
let alegereJucator;
document.getElementById("rock").addEventListener("click", function() {
    alegereJucator=alegeri[0]; joc();
});

document.getElementById("paper").addEventListener("click", function() {
    alegereJucator=alegeri[2]; joc();
});
document.getElementById("scissors").addEventListener("click", function() {
    alegereJucator=alegeri[1]; joc();
})

function GenerarePC() {
const indexRandom = Math.floor(Math.random() * 3);
let alegerePC = alegeri[indexRandom];
return alegerePC;
}
function comparareAlegeri() {
    if(alegereJucator === alegereCalculator) {
        document.getElementById("h2").innerHTML = '<span class="egalitate">Tie</span>';
    }
    else if ( (alegereJucator === alegeri[0] && alegereCalculator === alegeri[1]) || (alegereJucator === alegeri[1] && alegereCalculator === alegeri[2]) || (alegereJucator === alegeri[2] && alegereCalculator === alegeri[0])) 
     { document.getElementById("h2").innerHTML = `<span class= "win">You Won!</span>`;
        document.getElementById("h3").innerHTML = `You chose <span class= "alegere-jucator">${alegereJucator}</span>, and the computer chose <span class="alegere-calculator">${alegereCalculator}</span>.`; 
        scorJucator++;
        }
    else {
        document.getElementById("h2").innerHTML = `<span class= "lose">You Lost!</span>`;
        document.getElementById("h3").innerHTML = `You chose <span class= "alegere-jucator">${alegereJucator}</span>, and the computer chose <span class= "alegere-calculator">${alegereCalculator}</span>.`;
        scorCalculator++;
    }
}

function reset() {
    scorCalculator = 0;
    scorJucator = 0;
    document.getElementById("h3").textContent = ""; 
    document.getElementById("h2").textContent = ""; 
    document.getElementById("scorjucator").textContent = `Player: 0`;
    document.getElementById("scorpc").textContent = `Computer: 0`;
}

function joc() {
    alegereCalculator = GenerarePC();
    comparareAlegeri();
    document.getElementById("scorjucator").innerHTML = `Player: <span class= "scor-jucator">${scorJucator}</span>`;
    document.getElementById("scorpc").innerHTML = `Computer: <span class= "scor-calculator">${scorCalculator}</span>`;

}

let lightOn = false;
function light() {
    if(!lightOn) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    lightOn = true;
    }
    else {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    lightOn = false;
    }
}

