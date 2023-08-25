import getCountries from "./fetchData.js";
import debounce from "./util.js";

const inputBox = document.getElementById("input");
const suggestionBox = document.getElementById("suggestions");

const searchHandler = async (keyword) => {
    const countries = await getCountries(keyword);
    return countries.map(({ name }) => name.common);;
}

const renderSuggestion = (countryNames) => {
    if (countryNames.length) {
        suggestionBox.classList.add("visible");
    } else {
        suggestionBox.classList.remove("visible");
    }
    suggestionBox.innerHTML = "";

    const fragment = document.createDocumentFragment();
    countryNames.forEach((countryName) => {
        const li = document.createElement("li");
        li.innerText = countryName;
        fragment.appendChild(li);
    })
    suggestionBox.appendChild(fragment);
}

const suggestionHandler = async (event) => {
    const { value: keyword } = event.target;
    const countryNames = await searchHandler(keyword);
    renderSuggestion(countryNames);
}
inputBox.addEventListener("input", debounce(suggestionHandler));