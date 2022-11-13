import './css/styles.css';
import { fetchCountries } from './fetch-countries';
import debounce from 'lodash.debounce';
import {Notify} from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const refs = {
   searchBox: document.querySelector('#search-box'),
   countryList: document.querySelector('.country-list'),
   countryInfo: document.querySelector('.country-info'),
 };

 refs.searchBox.addEventListener('input', debounce(onSearchinput), 300);

function onSearchinput (e) {
   e.preventDefault();
   const name = e.target.value.trim();//собираем с формы значение

fetchUser(name)
.then(showCountries) //доступ к данным
.catch(showError);
}

function showError(error) {
   console.log(error);
   refs.searchBox.innerHTML = Notify.failure("Oops, there is no country with that name")
}
function showCountries(data) {
   
console.log(data);
   const element = 
   `
   <li class="country-list__item">
      <img class="country-list__flag" src="${data[0].flags.svg}" alt="Flag of ${data[0].name.official}" width = 50px height = 50px>
      <p class="country-list__name">${data[0].name.official}</p>
   </li>

   `
   refs.countryList.innerHTML = element;
}

function fetchUser (name) {
   return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`).then(responce => {
      if (!responce.ok) {
         throw Error(responce.statusText);
      }
      return responce.json();
   });
   
}






