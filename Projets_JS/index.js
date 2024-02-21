// CALCULATRICE

const addButton = document.getElementById("add");

addButton.addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("1").value);
    const num2 = parseFloat(document.getElementById("2").value);
    const result = num1 + num2;
    document.getElementById("result").innerHTML = result;
});

const susButton = document.getElementById("sou");

susButton.addEventListener("click", function() {    
    const num1 = parseFloat(document.getElementById("1").value);
    const num2 = parseFloat(document.getElementById("2").value);
    const result = num1 - num2;
    document.getElementById("result").innerHTML = result;
});

const mulButton = document.getElementById("mul");

mulButton.addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("1").value);
    const num2 = parseFloat(document.getElementById("2").value);
    const result = num1 * num2;
    document.getElementById("result").innerHTML = result;
});

const divButton = document.getElementById("div");

divButton.addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("1").value);
    const num2 = parseFloat(document.getElementById("2").value);
    const result = num1 / num2;
    document.getElementById("result").innerHTML = result;
});

const clearButton = document.getElementById("erase");

clearButton.addEventListener("click", function() {
    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("result").innerHTML = "";
});


console.log(addButton);
console.log(susButton);
console.log(mulButton);
console.log(divButton);
console.log(clearButton);


// LISTE DE COURSES

let liste =  document.getElementById("liste");
let basePrice = 0;
let arrondi = basePrice.toFixed(2);

const pomme = document.getElementById("add2");
pomme.addEventListener("click", function() {
    let newRow = liste.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Pomme";
    console.log(liste);
    document.getElementById("prix").innerHTML = basePrice += 2.20;
});

const poire = document.getElementById("add3");
poire.addEventListener("click", function() {
    let newRow = liste.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Poire";
    console.log(liste);
    document.getElementById("prix").innerHTML = basePrice += 2.14;
});

const banane = document.getElementById("add4");
banane.addEventListener("click", function() {
    let newRow = liste.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Banane";
    console.log(liste);
    document.getElementById("prix").innerHTML = basePrice += 3.65;
});

const orange = document.getElementById("add5");
orange.addEventListener("click", function() {
    let newRow = liste.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Orange";
    console.log(liste);
    document.getElementById("prix").innerHTML = basePrice += 2.51;
});

const raisin = document.getElementById("add6");
raisin.addEventListener("click", function() {
    let newRow = liste.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Raisin";
    console.log(liste);
    document.getElementById("prix").innerHTML = basePrice += 4.25;
});

const fraise = document.getElementById("add7");
fraise.addEventListener("click", function() {
    let newRow = liste.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Fraise";
    console.log(liste);
    document.getElementById("prix").innerHTML = basePrice += 3.64;
});


const cerise = document.getElementById("add8");
cerise.addEventListener("click", function() {
    let newRow = liste.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Cerise";
    console.log(liste);
    document.getElementById("prix").innerHTML = basePrice += 4.10;
});

const peche = document.getElementById("add9");
peche.addEventListener("click", function() {
    let newRow = liste.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Pêche";
    console.log(liste);
    document.getElementById("prix").innerHTML = basePrice += 3.31;
});

const oignon = document.getElementById("add10");
oignon.addEventListener("click", function() {
    let newRow = liste.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Oignon";
    console.log(liste);
    document.getElementById("prix").innerHTML = basePrice += 1.23;
});

const ail = document.getElementById("add11");
ail.addEventListener("click", function() {
    let newRow = liste.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Ail";
    console.log(liste);
    document.getElementById("prix").innerHTML = basePrice += 1.34;
});

const carotte = document.getElementById("add12");
carotte.addEventListener("click", function() {
    let newRow = liste.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Carotte";
    console.log(liste);
    document.getElementById("prix").innerHTML = basePrice += 2.27;
});

const tomate = document.getElementById("add13");
tomate.addEventListener("click", function() {
    let newRow = liste.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Tomate";
    console.log(liste);
    document.getElementById("prix").innerHTML = basePrice += 1.25;
});

const clearButton1 = document.getElementById("erase2");
clearButton1.addEventListener("click", function() {
    basePrice = 0;
    document.getElementById("liste").innerHTML = "";
    document.getElementById("prix").innerHTML = "";
});




