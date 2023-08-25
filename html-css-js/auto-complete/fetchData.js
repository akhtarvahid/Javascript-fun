async function getCountries(keyword) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);
        const result = await response.json();
        if (response.status == 404) {
            return [];
        }
        return result;
    } catch (err) {
        console.log("err", err);
    }
}
export default getCountries;


