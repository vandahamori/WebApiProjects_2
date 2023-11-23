window.onload = function () {
    letoltes();
}

var viccek;
function letoltes() {
    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;

    let vicceklista = document.getElementById('viccek-lista');
    vicceklista.innerHTML = '';

    for (var i = 0; i < viccek.length; i++) {
        let viccElem = document.createElement('p');
        viccElem.textContent = viccek[i];
        vicceklista.appendChild(viccElem);
    }
}


