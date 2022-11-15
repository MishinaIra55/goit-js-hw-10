import './css/styles.css';
import { fetchUser } from './fetch-countries';
import debounce from 'lodash.debounce';
import {Notify} from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const refs = {
   searchBox: document.querySelector('#search-box'),
   countryList: document.querySelector('.country-list'),
   countryInfo: document.querySelector('.country-info'),
 };

 refs.searchBox.addEventListener('input', debounce(onSearchinput), DEBOUNCE_DELAY);

 function onSearchinput() {
   const name = refs.searchBox.value.trim()
   if (name === '') {
     return (refs.countryList.innerHTML = ''), (refs.countryInfo.innerHTML = '')
   }//собираем с формы значение

fetchUser(name)//доступ к данным
.then(countries => {
   refs.countryList.innerHTML = ''
   refs.countryInfo.innerHTML = ''
   if (countries.length === 1) {
      refs.countryList.insertAdjacentHTML('beforeend', showCountryList(countries))
      refs.countryInfo.insertAdjacentHTML('beforeend', showCountryInfo(countries))
   } else if (countries.length >= 10) {
      showMatches()
   } else {
     refs.countryList.insertAdjacentHTML('beforeend', showCountryList(countries))
   }
 })
  
.catch(showError);
}

function showError() {
   Notify.failure("Oops, there is no country with that name")
}

function showMatches() {
   Notify.info('Too many matches found. Please enter a more specific name.')
 }

function showCountryList(countries) {
   const markup = countries
   .map(({name, flags}) => {
      return `
      <li class="country-list__item">
         <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 50px height = 50px>
         <p class="country-list__name">${name.official}</p>
      </li>
      `
   }).join('')
   return markup
}
   

   function showCountryInfo(countries) {
      const markup = countries
   .map(({ capital, population, languages }) => {
      return `
      <ul class="country-info__list">
      <li class="country-list__item"><p><b>Capital: </b>${capital}</p></li>
      <li class="country-list__item"><p><b>Population: </b>${population}</p></li>
      <li class="country-list__item"><p><b>Languages: </b>${Object.values(languages).join(', ')}</p></li>
      </ul>
      `
   }).join('')
   return markup
}
   
 







