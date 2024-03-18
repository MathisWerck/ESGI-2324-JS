document.addEventListener("DOMContentLoaded", function() {
    const pokemonListElement = document.getElementById("pokemonList");
    const detailedPokemonCard = document.getElementById("detailedPokemonCard");

    function getPokemonData() {
        return new Promise((resolve, reject) => {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
                .then(response => response.json())
                .then(data => {
                    const pokemonList = data.results;
                    const promises = pokemonList.map(pokemon => {
                        return fetchPokemonDetails(pokemon.url);
                    });
                    Promise.all(promises)
                        .then(pokemonDetails => resolve(pokemonDetails))
                        .catch(error => reject(error));
                })
                .catch(error => reject(error));
        });
    }

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
                        types: data.types.map(type => type.type.name).join(", ") // Format the types as a string
                    };
                    resolve(pokemon);
                })
                .catch(error => reject(error));
        });
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function formatHeight(height) {
        return (height / 10).toFixed(1) + "m";
    }

    function formatWeight(weight) {
        return (weight / 10).toFixed(1) + "kg";
    }

    function displayPokemonCards(pokemonDetails) {
        const container = document.createElement("div");

        pokemonDetails.forEach(pokemon => {
            const pokemonCard = document.createElement("button");
            pokemonCard.classList.add("pokemon-card");

            const types = pokemon.types.split(", "); // Séparer les types en cas de plusieurs types
        
            const typesHtml = types.map(type => `<span class="type ${type}">${type}</span>`).join(", "); // Créer des balises <span> pour chaque type

            pokemonCard.innerHTML = `
                <p class="card-id"><strong>ID :</strong> ${pokemon.id}</p>
                <img class="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}" />
                <h3 class="card-title">${pokemon.name}</h3>
                <p class="card-text"><strong>Taille :</strong> ${pokemon.height}</p>
                <p class="card-text"><strong>Poids :</strong> ${pokemon.weight}</p>
                <p class="card-text"><strong>Type :</strong> ${typesHtml}</p>
            `;

            pokemonCard.addEventListener("click", () => {
                // Action à effectuer lorsqu'un Pokémon est cliqué 
                showDetailedCard(pokemon);
                console.log(`${pokemon.name} a été cliqué !`);
            });
            container.appendChild(pokemonCard);
        });

        pokemonListElement.appendChild(container);
    }
    
    function showDetailedCard(pokemon) {
        const detailedPokemonCard = document.getElementById("showDetailedCard");
        
    
        // Affiche la carte détaillée
        detailedPokemonCard.style.display = "block";
    
        // Met à jour les détails du Pokémon dans la carte détaillée
        detailedPokemonCard.innerHTML = `
            <img class="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png" alt="${pokemon.name}" />
            <h3 class="card-title">${pokemon.name}</h3>
            <p class="pokemon-id">ID: ${pokemon.id}</p>
            <p class="pokemon-height"><strong>Height:</strong> ${pokemon.height}</p>
            <p class="pokemon-weight"><strong>Weight:</strong> ${pokemon.weight}</p>
            <p class="pokemon-types"><strong>Types:</strong> ${pokemon.types}</p>
        `;
    }

    function hideDetailedCard() {
        const detailedPokemonCard = document.getElementById("detailedPokemonCard");
        detailedPokemonCard.style.display = "none";
    }
    

    getPokemonData()
        .then(pokemonDetails => {
            displayPokemonCards(pokemonDetails);
        })
        .catch(error => {
            console.error("An error occurred while fetching Pokémon data:", error);
        });
});