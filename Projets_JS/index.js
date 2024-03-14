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

function updateTotalPrice() {
    document.getElementById("prix").innerHTML = basePrice.toFixed(2) + "";
}

const pomme = document.getElementById("add2");
let quantitePomme = 0;
let existingRowPomme = null;
document.getElementById("add2").addEventListener("click", function() {
    for (let i = 0; i < liste.rows.length; i++) {
        let row = liste.rows[i];
        if (row.cells[0].innerText.includes("Pomme")) {
            existingRowPomme = row;
            break;
        }
    }
    if (existingRowPomme) {
        quantitePomme++;
        existingRowPomme.cells[0].innerText = "- "+ quantitePomme +" Pommes ("+ quantitePomme * 2.20 +"€)";
    } else {
        let newRow = liste.insertRow();
        let newCell = newRow.insertCell();
        newCell.innerHTML = " - Pomme (2.20€)";
        quantitePomme = 1;
        let deleteCell = newRow.insertCell();
        deleteCell.innerHTML = '<button type="button" class="delete-button"><img src="images/trash.png" class="delete-button" alt =""></button>';
        deleteCell.querySelector(".delete-button").addEventListener("click", function() {
            let rowIndex = newRow.rowIndex;
            if (quantitePomme > 1) {
                quantitePomme--;
                basePrice -= 2.20;
                existingRowPomme.cells[0].innerText = "- "+ quantitePomme +" Pommes ("+ quantitePomme * 2.20 +"€)";
                updateTotalPrice();
            } else {
                basePrice -= 2.20;
                updateTotalPrice();
                liste.deleteRow(newRow.rowIndex);
                existingRowPomme = null;
            }
        });
    }
    basePrice += 2.20;
    updateTotalPrice();
});

const poire = document.getElementById("add3");
let quantitePoire = 0;
let existingRowPoire = null;
document.getElementById("add3").addEventListener("click", function() {
    for (let i = 0; i < liste.rows.length; i++) {
        let row = liste.rows[i];
        if (row.cells[0].innerText.includes("Poire")) {
            existingRowPoire = row;
            break;
        }
    }
    if (existingRowPoire) {
        quantitePoire++;
        existingRowPoire.cells[0].innerText = "- "+ quantitePoire +" Poires ("+ quantitePoire * 2.14 +"€)";
    } else {
        let newRow = liste.insertRow();
        let newCell = newRow.insertCell();
        newCell.innerHTML = " - Poire (2.14€)";
        quantitePoire = 1;
        let deleteCell = newRow.insertCell();
        deleteCell.innerHTML = '<button type="button" class="delete-button"><img src="images/trash.png" class="delete-button" alt =""></button>';
        deleteCell.querySelector(".delete-button").addEventListener("click", function() {
            let rowIndex = newRow.rowIndex;
            if (quantitePoire > 1) {
                quantitePoire--;
                basePrice -= 2.14;
                existingRowPoire.cells[0].innerText = "- "+ quantitePoire +" Poires ("+ quantitePoire * 2.14 +"€)";
                updateTotalPrice();
            } else {
                basePrice -= 2.14;
                updateTotalPrice();
                liste.deleteRow(newRow.rowIndex);
                existingRowPoire = null;
            }
        });
    }
    basePrice += 2.14;
    updateTotalPrice();
});

const banane = document.getElementById("add4");
let quantiteBanane = 0;
let existingRowBanane = null;
document.getElementById("add4").addEventListener("click", function() {
    for (let i = 0; i < liste.rows.length; i++) {
        let row = liste.rows[i];
        if (row.cells[0].innerText.includes("Banane")) {
            existingRowBanane = row;
            break;
        }
    }
    if (existingRowBanane) {
        quantiteBanane++;
        existingRowBanane.cells[0].innerText = "- "+ quantiteBanane +" Bananes ("+ quantiteBanane * 3.65 +"€)";
    } else {
        let newRow = liste.insertRow();
        let newCell = newRow.insertCell();
        newCell.innerHTML = " - Banane (3.65€)";
        quantiteBanane = 1;
        let deleteCell = newRow.insertCell();
        deleteCell.innerHTML = '<button type="button" class="delete-button"><img src="images/trash.png" class="delete-button" alt =""></button>';
        deleteCell.querySelector(".delete-button").addEventListener("click", function() {
            let rowIndex = newRow.rowIndex;
            if (quantiteBanane > 1) {
                quantiteBanane--;
                basePrice -= 3.65;
                existingRowBanane.cells[0].innerText = "- "+ quantiteBanane +" Bananes ("+ quantiteBanane * 3.65 +"€)";
                updateTotalPrice();
            } else {
                basePrice -= 3.65;
                updateTotalPrice();
                liste.deleteRow(newRow.rowIndex);
                existingRowBanane = null;
            }
        });
    }
    basePrice += 3.65;
    updateTotalPrice();
});

const orange = document.getElementById("add5");
let quantiteOrange = 0;
let existingRowOrange = null;
document.getElementById("add5").addEventListener("click", function() {
    for (let i = 0; i < liste.rows.length; i++) {
        let row = liste.rows[i];
        if (row.cells[0].innerText.includes("Orange")) {
            existingRowOrange = row;
            break;
        }
    }
    if (existingRowOrange) {
        quantiteOrange++;
        existingRowOrange.cells[0].innerText = "- "+ quantiteOrange +" Oranges ("+ quantiteOrange * 2.99 +"€)";
    } else {
        let newRow = liste.insertRow();
        let newCell = newRow.insertCell();
        newCell.innerHTML = " - Orange (2.99€)";
        quantiteOrange = 1;
        let deleteCell = newRow.insertCell();
        deleteCell.innerHTML = '<button type="button" class="delete-button"><img src="images/trash.png" class="delete-button" alt =""></button>';
        deleteCell.querySelector(".delete-button").addEventListener("click", function() {
            let rowIndex = newRow.rowIndex;
            if (quantiteOrange > 1) {
                quantiteOrange--;
                basePrice -= 2.99;
                existingRowOrange.cells[0].innerText = "- "+ quantiteOrange +" Oranges ("+ quantiteOrange * 2.99 +"€)";
                updateTotalPrice();
            } else {
                basePrice -= 2.99;
                updateTotalPrice();
                liste.deleteRow(newRow.rowIndex);
                existingRowOrange = null;
            }
        });
    }
    basePrice += 2.99;
    updateTotalPrice();
});

const raisin = document.getElementById("add6");
let quantiteRaisin = 0;
let existingRowRaisin = null;
document.getElementById("add6").addEventListener("click", function() {
    for (let i = 0; i < liste.rows.length; i++) {
        let row = liste.rows[i];
        if (row.cells[0].innerText.includes("Raisin")) {
            existingRowRaisin = row;
            break;
        }
    }
    if (existingRowRaisin) {
        quantiteRaisin++;
        existingRowRaisin.cells[0].innerText = "- "+ quantiteRaisin +" Raisins ("+ quantiteRaisin * 4.20 +"€)";
    } else {
        let newRow = liste.insertRow();
        let newCell = newRow.insertCell();
        newCell.innerHTML = " - Raisin (4.20€)";
        quantiteRaisin = 1;
        let deleteCell = newRow.insertCell();
        deleteCell.innerHTML = '<button type="button" class="delete-button"><img src="images/trash.png" class="delete-button" alt =""></button>';
        deleteCell.querySelector(".delete-button").addEventListener("click", function() {
            let rowIndex = newRow.rowIndex;
            if (quantiteRaisin > 1) {
                quantiteRaisin--;
                basePrice -= 4.20;
                existingRowRaisin.cells[0].innerText = "- "+ quantiteRaisin +" Raisins ("+ quantiteRaisin * 4.20 +"€)";
                updateTotalPrice();
            } else {
                basePrice -= 4.20;
                updateTotalPrice();
                liste.deleteRow(newRow.rowIndex);
                existingRowRaisin = null;
            }
        }
    )}
    basePrice += 4.20;
    updateTotalPrice();
});

const fraise = document.getElementById("add7");
let quantiteFraise = 0;
let existingRowFraise = null;
document.getElementById("add7").addEventListener("click", function() {
    for (let i = 0; i < liste.rows.length; i++) {
        let row = liste.rows[i];
        if (row.cells[0].innerText.includes("Fraise")) {
            existingRowFraise = row;
            break;
        }
    }
    if (existingRowFraise) {
        quantiteFraise++;
        existingRowFraise.cells[0].innerText = "- "+ quantiteFraise +" Fraises ("+ quantiteFraise * 3.64 +"€)";
    } else {
        let newRow = liste.insertRow(); 
        let newCell = newRow.insertCell();
        newCell.innerHTML = " - Fraise (3.64€)";
        quantiteFraise = 1;
        let deleteCell = newRow.insertCell();
        deleteCell.innerHTML = '<button type="button" class="delete-button"><img src="images/trash.png" class="delete-button" alt =""></button>';
        deleteCell.querySelector(".delete-button").addEventListener("click", function() {
            let rowIndex = newRow.rowIndex;
            if (quantiteFraise > 1) {
                quantiteFraise--;
                basePrice -= 3.64;
                existingRowFraise.cells[0].innerText = "- "+ quantiteFraise +" Fraises ("+ quantiteFraise * 3.64 +"€)";
                updateTotalPrice();
            } else {
                basePrice -= 3.64;
                updateTotalPrice();
                liste.deleteRow(newRow.rowIndex);
                existingRowFraise = null;
            }
        }
    )}
    basePrice += 3.64;
    updateTotalPrice();
});

const cerise = document.getElementById("add8");
let quantiteCerise = 0;
let existingRowCerise = null;
document.getElementById("add8").addEventListener("click", function() {
    for (let i = 0; i < liste.rows.length; i++) {
        let row = liste.rows[i];
        if (row.cells[0].innerText.includes("Cerise")) {
            existingRowCerise = row;
            break;
        }
    }
    if (existingRowCerise) {
        quantiteCerise++;
        existingRowCerise.cells[0].innerText = "- "+ quantiteCerise +" Cerises ("+ quantiteCerise * 4.10 +"€)";
    } else {
        let newRow = liste.insertRow();
        let newCell = newRow.insertCell();
        newCell.innerHTML = " - Cerise (4.10€)";
        quantiteCerise = 1;
        let deleteCell = newRow.insertCell();
        deleteCell.innerHTML = '<button type="button" class="delete-button"><img src="images/trash.png" class="delete-button" alt =""></button>';
        deleteCell.querySelector(".delete-button").addEventListener("click", function() {
            let rowIndex = newRow.rowIndex;
            if (quantiteCerise > 1) {
                quantiteCerise--;
                basePrice -= 4.10;
                existingRowCerise.cells[0].innerText = "- "+ quantiteCerise +" Cerises ("+ quantiteCerise * 4.10 +"€)";
                updateTotalPrice();
            } else {
                basePrice -= 4.10;
                updateTotalPrice();
                liste.deleteRow(newRow.rowIndex);
                existingRowCerise = null;
            }
        }
    )}
    basePrice += 4.10;  
    updateTotalPrice();
});

const peche = document.getElementById("add9");
let quantitePeche = 0;
let existingRowPeche = null;
document.getElementById("add9").addEventListener("click", function() {
    for (let i = 0; i < liste.rows.length; i++) {
        let row = liste.rows[i];
        if (row.cells[0].innerText.includes("Pêche")) {
            existingRowPeche = row;
            break;
        }
    }
    if (existingRowPeche) {
        quantitePeche++;
        existingRowPeche.cells[0].innerText = "- "+ quantitePeche +" Pêches ("+ quantitePeche * 3.31 +"€)";
    }
    else {
        let newRow = liste.insertRow();
        let newCell = newRow.insertCell();
        newCell.innerHTML = " - Pêche (3.31€)";
        quantitePeche = 1;
        let deleteCell = newRow.insertCell();
        deleteCell.innerHTML = '<button type="button" class="delete-button"><img src="images/trash.png" class="delete-button" alt =""></button>';
        deleteCell.querySelector(".delete-button").addEventListener("click", function() {
            let rowIndex = newRow.rowIndex;
            if (quantitePeche > 1) {
                quantitePeche--;
                basePrice -= 3.31;
                existingRowPeche.cells[0].innerText = "- "+ quantitePeche +" Pêches ("+ quantitePeche * 3.31 +"€)";
                updateTotalPrice();
            } else {
                basePrice -= 3.31;
                updateTotalPrice();
                liste.deleteRow(newRow.rowIndex);
                existingRowPeche = null;
            }
        }
    )}
    basePrice += 3.31;
    updateTotalPrice();
});

const oignon = document.getElementById("add10");
let quantiteOignon = 0;
let existingRowOignon = null;
document.getElementById("add10").addEventListener("click", function() {
    for (let i = 0; i < liste.rows.length; i++) {
        let row = liste.rows[i];
        if (row.cells[0].innerText.includes("Oignon")) {
            existingRowOignon = row;
            break;
        }
    }
    if (existingRowOignon) {
        quantiteOignon++;
        existingRowOignon.cells[0].innerText = "- "+ quantiteOignon +" Oignons ("+ quantiteOignon * 1.23 +"€)";
    } else {
        let newRow = liste.insertRow();
        let newCell = newRow.insertCell();  
        newCell.innerHTML = " - Oignon (1.23€)";
        quantiteOignon = 1;
        let deleteCell = newRow.insertCell();
        deleteCell.innerHTML = '<button type="button" class="delete-button"><img src="images/trash.png" class="delete-button" alt =""></button>';
        deleteCell.querySelector(".delete-button").addEventListener("click", function() {
            let rowIndex = newRow.rowIndex;
            if (quantiteOignon > 1) {
                quantiteOignon--;
                basePrice -= 1.23;
                existingRowOignon.cells[0].innerText = "- "+ quantiteOignon +" Oignons ("+ quantiteOignon * 1.23 +"€)";
                updateTotalPrice();
            } else {
                basePrice -= 1.23;
                updateTotalPrice();
                liste.deleteRow(newRow.rowIndex);
                existingRowOignon = null;
            }
        }
    )}
    basePrice += 1.23;
    updateTotalPrice();
});

const ail = document.getElementById("add11");
let quantiteAil = 0;
let existingRowAil = null;
document.getElementById("add11").addEventListener("click", function() {
    for (let i = 0; i < liste.rows.length; i++) {
        let row = liste.rows[i];
        if (row.cells[0].innerText.includes("Ail")) {
            existingRowAil = row;
            break;
        }
    }
    if (existingRowAil) {
        quantiteAil++;
        existingRowAil.cells[0].innerText = "- "+ quantiteAil +" Ails ("+ quantiteAil * 1.34 +"€)";
    }
    else {
        let newRow = liste.insertRow();
        let newCell = newRow.insertCell();
        newCell.innerHTML = " - Ail (1.34€)";
        quantiteAil = 1;
        let deleteCell = newRow.insertCell();
        deleteCell.innerHTML = '<button type="button" class="delete-button"><img src="images/trash.png" class="delete-button" alt =""></button>';
        deleteCell.querySelector(".delete-button").addEventListener("click", function() {
            let rowIndex = newRow.rowIndex;
            if (quantiteAil > 1) {
                quantiteAil--;
                basePrice -= 1.34;
                existingRowAil.cells[0].innerText = "- "+ quantiteAil +" Ails ("+ quantiteAil * 1.34 +"€)";
                updateTotalPrice();
            } else {
                basePrice -= 1.34;
                updateTotalPrice();
                liste.deleteRow(newRow.rowIndex);
                existingRowAil = null;
            }
        }
    )}
    basePrice += 1.34;
    updateTotalPrice();
});

const carotte = document.getElementById("add12");
let quantiteCarotte = 0;
let existingRowCarotte = null;
document.getElementById("add12").addEventListener("click", function() {
    for (let i = 0; i < liste.rows.length; i++) {
        let row = liste.rows[i];
        if (row.cells[0].innerText.includes("Carotte")) {
            existingRowCarotte = row;
            break;
        }
    }
    if (existingRowCarotte) {
        quantiteCarotte++;
        existingRowCarotte.cells[0].innerText = "- "+ quantiteCarotte +" Carottes ("+ quantiteCarotte * 2.27 +"€)";
    }
    else {
        let newRow = liste.insertRow();
        let newCell = newRow.insertCell();
        newCell.innerHTML = " - Carotte (2.27€)";
        quantiteCarotte = 1;
        let deleteCell = newRow.insertCell();
        deleteCell.innerHTML = '<button type="button" class="delete-button"><img src="images/trash.png" class="delete-button" alt =""></button>';
        deleteCell.querySelector(".delete-button").addEventListener("click", function() {
            let rowIndex = newRow.rowIndex;
            if (quantiteCarotte > 1) {
                quantiteCarotte--;
                basePrice -= 2.27;
                existingRowCarotte.cells[0].innerText = "- "+ quantiteCarotte +" Carottes ("+ quantiteCarotte * 2.27 +"€)";
                updateTotalPrice();
            } else {
                basePrice -= 2.27;
                updateTotalPrice();
                liste.deleteRow(newRow.rowIndex);
                existingRowCarotte = null;
            }
        }
    
    )}
    basePrice += 2.27;
    updateTotalPrice();
});

const tomate = document.getElementById("add13");
let quantiteTomate = 0;
let existingRowTomate = null;
document.getElementById("add13").addEventListener("click", function() {
    for (let i = 0; i < liste.rows.length; i++) {
        let row = liste.rows[i];
        if (row.cells[0].innerText.includes("Tomate")) {
            existingRowTomate = row;
            break;
        }
    }
    if (existingRowTomate) {
        quantiteTomate++;
        existingRowTomate.cells[0].innerText = "- "+ quantiteTomate +" Tomates ("+ quantiteTomate * 1.25 +"€)";
    }
    else {
        let newRow = liste.insertRow();
        let newCell = newRow.insertCell();
        newCell.innerHTML = " - Tomate (1.25€)";
        quantiteTomate = 1;
        let deleteCell = newRow.insertCell();
        deleteCell.innerHTML = '<button type="button" class="delete-button"><img src="images/trash.png" class="delete-button" alt =""></button>';
        deleteCell.querySelector(".delete-button").addEventListener("click", function() {
            let rowIndex = newRow.rowIndex;
            if (quantiteTomate > 1) {
                quantiteTomate--;
                basePrice -= 1.25;
                existingRowTomate.cells[0].innerText = "- "+ quantiteTomate +" Tomates ("+ quantiteTomate * 1.25 +"€)";
                updateTotalPrice();
            } else {
                basePrice -= 1.25;
                updateTotalPrice();
                liste.deleteRow(newRow.rowIndex);
                existingRowTomate = null;
            }
        }
    )}
    basePrice += 1.25;
    updateTotalPrice();
});

const clearButton1 = document.getElementById("erase2");
clearButton1.addEventListener("click", function() {
    basePrice = 0;
    document.getElementById("liste").innerHTML = "";
    document.getElementById("prix").innerHTML = "";
});

const btnDelete = document.querySelectorAll(".delete-button");
btnDelete.forEach(button =>{
    button.addEventListener("click", function() {
        const row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
        basePrice -= parseFloat(row.cells[1].getAttribute("prix"));
    });
});


document.getElementById("erase2").addEventListener("click", function() {
    basePrice = 0;
    liste.innerHTML = "";
    quantitePomme = 0;
    existingRowPomme = null;
    quantitePoire = 0;
    existingRowPoire = null;
    quantiteBanane = 0;
    existingRowBanane = null;
    quantiteOrange = 0;
    existingRowOrange = null;
    quantiteRaisin = 0;
    existingRowRaisin = null;
    quantiteFraise = 0;
    existingRowFraise = null;
    quantiteCerise = 0;
    existingRowCerise = null;
    quantitePeche = 0;
    existingRowPeche = null;
    quantiteOignon = 0;
    existingRowOignon = null;
    quantiteAil = 0;
    existingRowAil = null;
    quantiteCarotte = 0;
    existingRowCarotte = null;
    quantiteTomate = 0;
    existingRowTomate = null;
    


    updateTotalPrice();
});

console.log(add2);
console.log(add3);
console.log(add4);
console.log(add5);
console.log(add6);
console.log(add7);
console.log(add8);
console.log(add9);
console.log(add10);
console.log(add11);
console.log(add12);
console.log(add13);
console.log(clearButton1);
console.log(btnDelete);









// API STAR WARS

document.addEventListener("DOMContentLoaded", () => {
    const filmsListElement = document.getElementById("films-list");
    const filmDetailsElement = document.getElementById("film-details");

    // Fonction pour afficher la liste des films
    function afficherListeFilms() {
        fetch("https://swapi.dev/api/films/")
            .then(response => response.json())
            .then(data => {
                data.results.forEach(film => {
                    const li = document.createElement("li");
                    li.classList.add("film-button");
                    li.textContent = film.title;
                    li.style.cursor = "pointer";
                    li.addEventListener("click", () => afficherDetailsFilm(film.url));
                    filmsListElement.appendChild(li);
                });
            })
            .catch(error => console.error("Erreur lors de la récupération des films :", error));
    }

    // Fonction pour récupérer les noms des personnages
    function fetchCharacterNames(characterLinks) {
        const characters = characterLinks.map(link => {
            return fetch(link)
                .then(response => response.json())
                .then(character => character.name)
                .catch(error => {
                    console.error("Erreur lors de la récupération du nom du personnage :", error);
                    return null;
                });
        });
        return Promise.all(characters);
    }

    // Fonciton pour récupérer les noms des planètes
    function fetchPlanetNames(planetLinks) {
        const planets = planetLinks.map(link => {
            return fetch(link)
                .then(response => response.json())
                .then(planet => planet.name)
                .catch(error => {
                    console.error("Erreur lors de la récupération du nom de la planète :", error);
                    return null;
                });
        });
        return Promise.all(planets);
    }

    // Fonction pour afficher les détails d'un film sélectionné
    function afficherDetailsFilm(url) {
        fetch(url)
          .then(response => response.json())
          .then(film => {
            Promise.all([
              fetchCharacterNames(film.characters),
              fetchPlanetNames(film.planets)
            ])
            .then(([characterNames, planetNames]) => {
              const charactersPerRow = 4;
              const characterRows = [];
              for (let i = 0; i < characterNames.length; i += charactersPerRow) {
                characterRows.push(characterNames.slice(i, i + charactersPerRow));
              }
              
              const characterTableRows = characterRows.map(row => {
                const cells = row.map(name => `<td>${name}</td>`).join('');
                return `<tr>${cells}</tr>`;
              }).join('');
      
              filmDetailsElement.innerHTML = `
                <h2>${film.title}</h2>
                <p><strong>Date de sortie :</strong> ${film.release_date}</p>
                <p><strong>Réalisateur :</strong> ${film.director}</p>
                <p><strong>Producteurs :</strong> ${film.producer}</p>
                <p class="resume"><strong>Résumé :</strong> ${film.opening_crawl}</p>
                <p><strong>Personnages :</strong></p>
                <div class="table-container">
                    <table id="characters-table" class="characters-table">
                    <tbody>
                        ${characterTableRows}
                    </tbody>
                    </table>
                </div>
                <p><strong>Planètes :</strong> ${planetNames.join(', ')}</p>
                `;
            })
            .catch(error => console.error("Erreur lors de la récupération des détails :", error));
          })
          .catch(error => console.error("Erreur lors de la récupération des détails du film :", error));
      }

    // Appel pour afficher la liste des films au chargement de la page
    afficherListeFilms();
});


console.log(filmsListElement);
console.log(filmDetailsElement);

   