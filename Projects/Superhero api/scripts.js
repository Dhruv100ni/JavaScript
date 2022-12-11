const SUPERHERO_TOKEN = '10223569763528853';
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}/`;

const newHeroButton = document.getElementById('newHeroButton');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const heroImageDiv = document.getElementById('heroImage');

const getstatsHTML = (character) => {
    let statsHTML = '';
    for (const stat in character) {
        statsHTML += `<li>${stat}: ${character[stat]}</li>`;
    }
    return statsHTML;
};

const getSearchSuperhero = (id, name) => {
    console.log(name);
    fetch(`${BASE_URL}search/${id}`)
        .then(response => response.json())  
        .then(data => {
            const hero = data.results[0];
            heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=200 width=200/>`;
            heroImageDiv.innerHTML += `<h1>${hero.name}</h1>`;
            heroImageDiv.innerHTML += `<h2>${hero.biography['full-name']}</h2>`;
            heroImageDiv.innerHTML += `<h3>${hero.biography.publisher}</h3>`;

        })
}


const getRandomSuperhero = (id) => {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            heroImageDiv.innerHTML = `<img src="${json.image.url}" height=200 width=200/>`;
            heroImageDiv.innerHTML += `<h1>${json.name}</h1>`;
            heroImageDiv.innerHTML += `<h2>${json.biography['full-name']}</h2>`;
            heroImageDiv.innerHTML += `<h3>${json.biography.publisher}</h3>`;

        })
}

newHeroButton.onclick = () => {
    const id = Math.floor(Math.random() * 731) + 1;
    getRandomSuperhero(id);
}

searchButton.onclick = () => {
    const name = searchInput.value;
    getSearchSuperhero(name);
}

