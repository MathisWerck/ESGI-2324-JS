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

