document.addEventListener("DOMContentLoaded", function() {

    const scrollTopButton = document.getElementById("scrollTopButton");
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Animation de défilement fluide
        });
    }
    scrollTopButton.addEventListener("click", scrollToTop);
    
    const scrollDownButton = document.querySelector(".scroll-down-button");
    scrollDownButton.addEventListener("click", function() {
        window.scrollBy({
            top: 760,
            behavior: "smooth" // Fait défiler la page de manière fluide
        });
    });



    const pokemonListElement = document.getElementById("pokemonList");

    let typesHtml = "";

    let pokemonList = []; // Déclaration de la variable pour stocker les noms de Pokémon


    const pokemon = "https://pokeapi.co/api/v2/pokemon?limit=151"; // L'API de Pokémon pour obtenir les noms de Pokémon
    const description = "https://pokeapi.co/api/v2/pokemon-species/"; // L'API de Pokémon pour obtenir les descriptions de Pokémon

    // Lier l'API de Pokémon au code
    function getPokemonData() {
        return new Promise((resolve, reject) => {
            fetch(pokemon)
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
                    const pokemonSpeciesUrl = data.species.url; // URL de l'espèce Pokémon
                    fetch(pokemonSpeciesUrl) // Fetch des détails de l'espèce Pokémon
                        .then(response => response.json())
                        .then(speciesData => {
                            const id = data.id;
                            const name = capitalizeFirstLetter(data.name);
                            const height = formatHeight(data.height);
                            const weight = formatWeight(data.weight);
                            const types = data.types.map(type => capitalizeFirstLetter(type.type.name)).join(", ");
                            const description = speciesData.flavor_text_entries.find(entry => entry.language.name === 'fr').flavor_text;
                            const nameFr = speciesData.names.find(entry => entry.language.name === 'fr').name;
                            const evolutionChain = speciesData.evolves_from_species ? capitalizeFirstLetter(speciesData.evolves_from_species.name) : "Aucun"; // Vérifie si le Pokémon a une évolution
                            const habitat = capitalizeFirstLetter(speciesData.habitat ? speciesData.habitat.name : "Inconnu"); // Vérifie si le Pokémon a un habitat
                            const pv = data.stats[0].base_stat;
                            const attaque = data.stats[1].base_stat;
                            const defense = data.stats[2].base_stat;
                            const specialAttack = data.stats[3].base_stat;
                            const specialDefense = data.stats[4].base_stat;
                            const speed = data.stats[5].base_stat;

                            const pokemon = {
                                id: id,
                                nameFr: capitalizeFirstLetter(nameFr), 
                                name: name,
                                height: height,
                                weight: weight,
                                types: types,
                                description: description,
                                evolutionChain: evolutionChain,
                                habitat: habitat,
                                pv: pv,
                                attaque: attaque, 
                                defense: defense,
                                speciale_attaque: specialAttack, 
                                speciale_defence: specialDefense, 
                                vitesse: speed
                            };
                            resolve(pokemon);
                        })
                        .catch(error => reject(error));
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

            typesHtml = types.map(type => `<span class="type-box ${typeFrench(type)}">${typeFrench(type)}</span>`).join("");

            function typeFrench(type){
                switch (type) {
                    case "Fire":
                        return "Feu";
                    case "Water":
                        return "Eau";
                    case "Grass":
                        return "Plante";
                    case "Electric":
                        return "Electric";
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
                    <p class="card-id">${pokemon.id}</p>
                    <p class="card-pv">${pokemon.pv ? `PV: ${pokemon.pv}` : ''}</p>
                </div>
                <h3 id="card-title" class="card-title">${pokemon.nameFr}</h3>
                <p class="card-title2">${pokemon.name}</p>
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

    searchInput.addEventListener("input", function() {
        const searchValue = this.value.trim().toLowerCase(); // Convertir en minuscules pour correspondre aux noms de Pokémon
        const pokemonCards = document.querySelectorAll(".pokemon-card");
    
        pokemonCards.forEach(card => {
            const pokemonName = card.querySelector(".card-title").textContent.trim().toLowerCase();
            const pokemonNameFr = card.querySelector(".card-title2").textContent.trim().toLowerCase();
            const pokemonId = card.querySelector(".card-id").textContent;
    
            if (pokemonName.startsWith(searchValue) || pokemonNameFr.startsWith(searchValue) || pokemonId === searchValue) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden"); // Masquer la carte sinon
            }
        });
    });
    
    // Afficher la carte détaillée du Pokémon (lorsqu'une carte Pokémon est cliqué)
    function showDetailedCard(pokemon) {
        const detailedPokemonCard = document.getElementById("detailedPokemonCard");
        console.log('pokemon: ', pokemon);
        // Affiche la carte détaillée en ajoutant une classe pour la montrer
        detailedPokemonCard.classList.add("show-detailed-card");
        detailedPokemonCard.classList.add("close-btn");
        detailedPokemonCard.style.display = "block";
        document.body.classList.add("no-scroll");

        window.addEventListener("scroll", () => {        
            // Si l'encadré est affiché, recalculer sa position lors du défilement
            if (detailedPokemonCard.style.display === "block") {
                detailedPokemonCard.style.top = `${window.innerHeight / 2 + window.scrollY}px`;
            }
        });
        
        const types = pokemon.types.split(", "); 

        typesHtml = types.map(type => `<span class="type-box-hidden ${typeFrench(type)}">${typeFrench(type)}</span>`).join("");

        function typeFrench(type){
            switch (type) {
                case "Fire":
                    return "Feu";
                case "Water":
                    return "Eau";
                case "Grass":
                    return "Plante";
                case "Electric":
                    return "Electric";
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
        <div class="pokemon-titre-container-hidden">
            <button class="closeButton" id="closeButton"><img class="closeButton-icon" src="images/close.png"></button>
            <div class="id-pv-container-hidden">
                <p class="card-id-hidden">N°${pokemon.id}</p>
                <h3 class="card-title-hidden">${pokemon.nameFr}</h3>
                <p class="card-title2-hidden">(${pokemon.name})</p>
            </div>
        </div>
        <div class="pokemon-details-hidden">
            <div class="pokemon-img-container-hidden">
                <img class="pokemon-img-hidden" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}" />
            </div>
            <div class="pokemon-description-hidden">
                <p class="card-description-hidden">${pokemon.description}</p>
            </div>
        </div>        
        <div class="pokemon-info-hidden">
            <div class="stat-container">
                <p class="stat-title">Statistiques :</p>
                <p class="stat">PV : ${pokemon.pv}</p>
                <p class="stat">Attaque : ${pokemon.attaque}</p>
                <p class="stat">Défense : ${pokemon.defense}</p>
                <p class="stat">Attaque Spéciale : ${pokemon.speciale_attaque}</p>
                <p class="stat">Défense Spéciale : ${pokemon.speciale_defence}</p>
                <p class="stat">Vitesse : ${pokemon.vitesse}</p>
            </div>
            <div class="infos-container">
                <p class="infos-titre"><strong>Infos :</strong></p>
                <div class="infos">
                    <div class="infos1">
                        <p class="card-text-hidden"><strong>Taille :</strong></p>
                        <p class="card-text-hidden">${pokemon.height}</p>
                    </div>
                    <div class="infos2">
                        <p class="card-text-hidden"><strong>Poids :</strong></p>
                        <p class="card-text-hidden">${pokemon.weight}</p>
                    </div>
                </div>
                <div class="infos">
                    <div class="infos1">
                        <p class="card-text-hidden"><strong>Habitat :</strong></p>
                        <p class="card-text-hidden">${pokemon.habitat}</p>
                    </div>
                    <div class="infos2">
                        <p class="card-text-hidden"><strong>Évolution de :</strong></p>
                        <p class="card-text-hidden">${pokemon.evolutionChain}</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="type-hidden"> ${typesHtml}</p>
        `;

        document.getElementById("closeButton").addEventListener("click", function() {
            detailedPokemonCard.classList.remove("show-detailed-card");
            detailedPokemonCard.style.display = "none";
            document.body.classList.remove("no-scroll");
        });
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


