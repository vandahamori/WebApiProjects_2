window.onload = function () {
    initPascal(10);
};
//n -hány soros legyen a pascal 3szög
var initPascal = function (n) {
    for (var sor = 0; sor < 10; sor++) { 
        var ujDiv = document.createElement('div');//új div létrehozása az új sornak
        ujDiv.classList.add("sor"); //új div osztálylistájához add hozzá a "sor"-t
        document.getElementById('pascal').appendChild(ujDiv);//új div-et add hozzá a "pascal" gyermekeihez
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var ujDivElem = document.createElement('div');//új div létrehozása az új elemnek
            ujDivElem.classList.add('elem');//új elem div osztálylistájához add hozzá az "elem"-et
            //ujDivElem.innerHTML = sor + ':' + oszlop;//teszteléshet .innerHTML = `${sor}:${oszlop}`
            ujDivElem.innerHTML = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor - oszlop)); //legyen az innerHTML a megfelelő szám
            ujDiv.appendChild(ujDivElem);//új elem div-et vedd fel a sor elemei közé
        }
    }
}
var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
};