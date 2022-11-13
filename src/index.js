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

 refs.searchBox.addEventListener('input', onSearchinput);

function onSearchinput (e) {
   e.preventDefault();
   const name = e.target.value.trim();//собираем с формы значение

fetchUser(name)
   .then(data => console.log(data)) //доступ к данным
}

function fetchUser (name) {
   return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages`)
   .then(response => response.json())
}






