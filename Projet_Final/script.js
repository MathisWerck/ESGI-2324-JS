document.addEventListener("DOMContentLoaded", function() {
    const pokemonListElement = document.getElementById("pokemonList");
    let typesHtml = "";

    let pokemonList = []; // Déclaration de la variable pour stocker les noms de Pokémon

    // Lier l'API de Pokémon au code
    function getPokemonData() {
        return new Promise((resolve, reject) => {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
                .then(response => response.json())
                .then(data => {
                    const pokemonListData = data.results; // Obtenir la liste des noms de Pokémon
                    pokemonList = pokemonListData.map(pokemon => pokemon.name); // Extraire les noms de la liste
                    const promises = pokemonListData.map(pokemon => {
                        return fetchPokemonDetails(pokemon.url);
                    });
                    Promise.all(promises)
                        .then(pokemonDetails => resolve(pokemonDetails))
                        .catch(error => reject(error));
                })
                .catch(error => reject(error));
        });
    }

    // Récupérer les détails des Pokémon
    function fetchPokemonDetails(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const pokemon = {
                        id: data.id,
                        name: capitalizeFirstLetter(data.name),
                        height: formatHeight(data.height),
                        weight: formatWeight(data.weight),
                        types: data.types.map(type => capitalizeFirstLetter(type.type.name)).join(", "), // Format the types as a string
                        pv: data.stats[0].base_stat,
                    };
                    resolve(pokemon);
                })
                .catch(error => reject(error));
        });
    }

    // Fait en sorte que la première lettre soit en majuscule
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Formater la taille des Pokémon
    function formatHeight(height) {
        return (height / 10).toFixed(1) + "m";
    }

    // Formater le poids des Pokémon
    function formatWeight(weight) {
        return (weight / 10).toFixed(1) + "kg";
    }

    

    // Afficher les cartes des Pokémon
    function displayPokemonCards(pokemonDetails) {
        const container = document.createElement("div");
    
        // Créer une carte pour chaque Pokémon
        pokemonDetails.forEach(pokemon => {
            const pokemonCard = document.createElement("button");
            pokemonCard.classList.add("pokemon-card");
    
            // Séparer les types en cas de plusieurs types
            const types = pokemon.types.split(", "); 

            typesHtml = types.map(type => `<span class="type-box ${getTypeColor(type)}">${typeFrench(type)}</span>`).join("");

            // Définir la couleur en fonction des types
            function getTypeColor(type) {
                switch (type) {
                    case "Fire":
                        return "fire";
                    case "Water":
                        return "water";
                    case "Grass":
                        return "grass";
                    case "Electric":
                        return "electric";
                    case "Poison":
                        return "poison";
                    case "Bug":
                        return "bug";
                    case "Ground":
                        return "ground";
                    case "Fairy":
                        return "fairy";
                    case "Normal":
                        return "normal";
                    case "Fighting":
                        return "fighting";
                    case "Psychic":
                        return "psychic";
                    case "Rock":
                        return "rock";
                    case "Ghost":
                        return "ghost";
                    case "Ice":
                        return "ice";
                    case "Dragon":
                        return "dragon";
                    case "Dark":
                        return "dark";
                    case "Steel":
                        return "steel";
                    case "Flying":
                        return "flying";
                }
            }

            function typeFrench(type){
                switch (type) {
                    case "Fire":
                        return "Feu";
                    case "Water":
                        return "Eau";
                    case "Grass":
                        return "Plante";
                    case "Electric":
                        return "Electrik";
                    case "Poison":
                        return "Poison";
                    case "Bug":
                        return "Insecte";
                    case "Ground":
                        return "Sol";
                    case "Fairy":
                        return "Fée";
                    case "Normal":
                        return "Normal";
                    case "Fighting":
                        return "Combat";
                    case "Psychic":
                        return "Psy";
                    case "Rock":
                        return "Roche";
                    case "Ghost":
                        return "Spectre";
                    case "Ice":
                        return "Glace";
                    case "Dragon":
                        return "Dragon";
                    case "Dark":
                        return "Ténèbres";
                    case "Steel":
                        return "Acier";
                    case "Flying":
                        return "Vol";
                }
            }

            // Texte à afficher dans les cartes Pokémon
            pokemonCard.innerHTML = `
                <div class="id-pv-container">
                    <p class="card-id">N°${pokemon.id}</p>
                    <p class="card-pv">${pokemon.pv ? `PV: ${pokemon.pv}` : ''}</p>
                </div>
                <h3 class="card-title">${pokemon.name}</h3>
                <img class="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}" />
                <p class="card-text"><strong>Taille :</strong> ${pokemon.height}</p>
                <p class="card-text"><strong>Poids :</strong> ${pokemon.weight}</p>
                <p class="type"> ${typesHtml}</p>
            `;

            // Afficher la carte détaillée lorsqu'un Pokémon est cliqué
            pokemonCard.addEventListener("click", () => { 
                showDetailedCard(pokemon);
                console.log(`${pokemon.name} a été cliqué !`);
            });
            container.appendChild(pokemonCard);
        });

        pokemonListElement.appendChild(container);
    }

    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function() {
        const searchValue = this.value.toLowerCase(); // Convertir en minuscules pour correspondre aux noms de Pokémon
        const pokemonCards = document.querySelectorAll(".pokemon-card");

        pokemonCards.forEach(card => {
            const pokemonName = card.querySelector(".card-title").textContent.toLowerCase();
            if (pokemonName.startsWith(searchValue)) {
                card.classList.remove("hidden"); // Afficher la carte si le nom correspond à la recherche
            } else {
                card.classList.add("hidden"); // Masquer la carte sinon
            }
        });
    });
    
    // Afficher la carte détaillée du Pokémon (lorsqu'une carte Pokémon est cliqué)
    function showDetailedCard(pokemon) {
        const detailedPokemonCard = document.getElementById("detailedPokemonCard");

        // Affiche la carte détaillée en ajoutant une classe pour la montrer
        detailedPokemonCard.classList.add("show-detailed-card");
        detailedPokemonCard.classList.add("hide-detailed-card");
        detailedPokemonCard.style.display = "block";
        document.body.classList.add("no-scroll");

        window.addEventListener("scroll", () => {
            const detailedPokemonCard = document.getElementById("detailedPokemonCard");
        
            // Si l'encadré est affiché, recalculer sa position lors du défilement
            if (detailedPokemonCard.style.display === "block") {
                detailedPokemonCard.style.top = `${window.innerHeight / 2 + window.scrollY}px`;
            }
        });
        
        const types = pokemon.types.split(", "); 

        typesHtml = types.map(type => `<span class="type-box ${getTypeColor(type)}">${typeFrench(type)}</span>`).join("");

        function getTypeColor(type) {
            switch (type) {
                case "Fire":
                    return "fire";
                case "Water":
                    return "water";
                case "Grass":
                    return "grass";
                case "Electric":
                    return "electric";
                case "Poison":
                    return "poison";
                case "Bug":
                    return "bug";
                case "Ground":
                    return "ground";
                case "Fairy":
                    return "fairy";
                case "Normal":
                    return "normal";
                case "Fighting":
                    return "fighting";
                case "Psychic":
                    return "psychic";
                case "Rock":
                    return "rock";
                case "Ghost":
                    return "ghost";
                case "Ice":
                    return "ice";
                case "Dragon":
                    return "dragon";
                case "Dark":
                    return "dark";
                case "Steel":
                    return "steel";
                case "Flying":
                    return "flying";
            }
        }

        function typeFrench(type){
            switch (type) {
                case "Fire":
                    return "Feu";
                case "Water":
                    return "Eau";
                case "Grass":
                    return "Plante";
                case "Electric":
                    return "Electrik";
                case "Poison":
                    return "Poison";
                case "Bug":
                    return "Insecte";
                case "Ground":
                    return "Sol";
                case "Fairy":
                    return "Fée";
                case "Normal":
                    return "Normal";
                case "Fighting":
                    return "Combat";
                case "Psychic":
                    return "Psy";
                case "Rock":
                    return "Roche";
                case "Ghost":
                    return "Spectre";
                case "Ice":
                    return "Glace";
                case "Dragon":
                    return "Dragon";
                case "Dark":
                    return "Ténèbres";
                case "Steel":
                    return "Acier";
                case "Flying":
                    return "Vol";
            }
        }

        // Met à jour les détails du Pokémon dans la carte détaillée
        detailedPokemonCard.innerHTML = `
        <button class="close-btn" id="hideDetailedCard">Fermer</button>
        <p class="card-id-hidden">N°${pokemon.id}</p>
        <h3 class="card-title-hidden">${pokemon.name}</h3>
        <div class="pokemon-details-hidden">
            <div class="pokemon-img-container-hidden">
                <img class="pokemon-img-hidden" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}" />
            </div>
            <div class="pokemon-info-hidden">
                <p class="card-text-hidden"><strong>Taille :</strong> ${pokemon.height}</p>
                <p class="card-text-hidden"><strong>Poids :</strong> ${pokemon.weight}</p>
            </div>
        </div>
        <p class="type-hidden"> ${typesHtml}</p>
        `;

        const closeButton = detailedPokemonCard.querySelector("hideDetailedCard");
        closeButton.addEventListener("click", () => {
            hideDetailedCard();
            console.log(`${pokemon.name} a été fermé !`);
        });
    
        // Affiche le texte lorsque vous cliquez sur une carte Pokémon
        document.getElementById("pokemonClickedText").innerText = `Vous avez cliqué sur ${pokemon.name}`;

    }

    
    // Fermer la carte détaillée lorsqu'on clique sur le bouton "Fermer"
    getPokemonData()
        .then(pokemonDetails => {
            displayPokemonCards(pokemonDetails);
        })
        .catch(error => {
            console.error("An error occurred while fetching Pokémon data:", error);
        });
});