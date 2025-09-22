import axios from "axios";

import './style.css'


/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 *
 */

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const form = document.querySelector(".search-form");
const container = document.querySelector(".card-container");

form.addEventListener("submit", onSearch);

async function fetchPokemon(pokemonName) {
    const result = await axios(`${BASE_URL}${pokemonName}`);
    return result.data;
}

async function onSearch(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.query.value.trim();
    
    try {
        const data = await fetchPokemon(searchQuery);
        console.log(data);
        
        container.innerHTML = renderPokemonCard(data);
    } catch(error) {
        onFetchError(error);
    } 
}

function renderPokemonCard({ name, weight, height, abilities, sprites: { front_default } }) {
    const abilitiesList = abilities.map(({ ability }) => `
        <li class="list-group-item">${ability.name}</li>
    `).join("");

    return `
        <div class="card">
            <div class="card-img-top">
                <img src="${front_default}" alt="${name}"/>
            </div>
            <div class="card-body">
                <h2 class="card-title">Ім'я: ${name}</h2>
                <p class="card-text">Вага: ${weight}</p>
                <p class="card-text">Зріст: ${height}</p>

                <p class="card-text">
                    <h4>Вміння: </h4>
                    <ul>    
                        ${abilitiesList}
                    </ul>
                </p>
            </div>
        </div>
    `
}

function onFetchError(error) {
    alert(`Oooops, Спробуйте ще. ${error.message}`)
}






