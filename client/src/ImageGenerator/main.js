
function randombg() {
    let random = Math.floor(Math.random() * 6) + 0;
    let bigSize = ["url(../HeaderImages//Stowe.jpeg)",
        "url(../HeaderImages//Burlington.jpg)",
        "url(../HeaderImages//Montpelier.jpg)",
        "url(../HeaderImages//Brattleboro.jpg)",
        "url(../HeaderImages//Warren.jpg)",
        "url(../HeaderImages//Manchester.jpg)"];
    document.getElementById("random").style.backgroundImage = bigSize[random];
}