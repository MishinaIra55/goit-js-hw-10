function fetchCountries() {
   fetch ('https://restcountries.com/v3.1/all')
   .then(response => response.json())
   .then(data => console.log(data))
}
fetchCountries();

export default {fetchCountries};