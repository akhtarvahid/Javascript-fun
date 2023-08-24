import getCountries from "./fetchData.js";
import debounce from "./util.js";

const inputBox = document.getElementById("input");
const suggestionBox = document.getElementById("suggestions");

const searchHandler = async (keyword) => {
    const countries = await getCountries(keyword);
    const countryNames = countries.map((country) => country.name.common);
    return countryNames;
}

const populateSuggestionBox = (countryNames) => {
    if (countryNames.length) {
        suggestionBox.classList.add("visible");
    } else {
        suggestionBox.classList.remove("visible");
    }
    suggestionBox.innerHTML = "";

    const fragment = document.createDocumentFragment();
    console.log('countryNames array', countryNames)
    countryNames.forEach((countryName) => {
        const li = document.createElement("li");
        li.innerText = countryName;
        fragment.appendChild(li);
    })
    suggestionBox.appendChild(fragment);
}

const suggestionHandler = async (e) => {
    const keyword = e.target.value;
    const countryNames = await searchHandler(keyword);
    populateSuggestionBox(countryNames);
}
inputBox.addEventListener("input", debounce(suggestionHandler));