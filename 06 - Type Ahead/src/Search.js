const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities = data);

function findMatch(searchString, cities) {
  return cities.filter(place => {
    // g for global matches (don't stop after first), i for case insensitive:
    const regex = new RegExp(searchString, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatch() {
  const arrayOfMatches = findMatch(this.value, cities);
  const html = arrayOfMatches.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
    const stateName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
    return `<li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>`
  }).join("");
  suggestions.innerHTML = html;
}

const input = document.querySelector('.search');
input.addEventListener('keyup', displayMatch);
const suggestions = document.querySelector('.suggestions');
