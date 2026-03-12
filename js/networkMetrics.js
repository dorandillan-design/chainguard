/* ================= LIVE METRICS SIMULATION ================= */

function random(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1)
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

setInterval(() => {

    /* Ethereum */

    document.getElementById("ethBlock").innerText =
        parseInt(document.getElementById("ethBlock").innerText) + randomInt(1, 3)

    document.getElementById("ethTPS").innerText =
        random(15, 20)

    document.getElementById("ethGas").innerText =
        randomInt(18, 35) + " Gwei"


    /* BSC */

    document.getElementById("bscBlock").innerText =
        parseInt(document.getElementById("bscBlock").innerText) + randomInt(2, 5)

    document.getElementById("bscTPS").innerText =
        random(28, 38)

    document.getElementById("bscGas").innerText =
        randomInt(2, 6) + " Gwei"


    /* Polygon */

    document.getElementById("polyBlock").innerText =
        parseInt(document.getElementById("polyBlock").innerText) + randomInt(2, 6)

    document.getElementById("polyTPS").innerText =
        random(38, 50)

    document.getElementById("polyGas").innerText =
        randomInt(40, 90) + " Gwei"

}, 3000)