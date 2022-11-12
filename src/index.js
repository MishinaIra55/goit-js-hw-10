import './css/styles.css';
import {fetchCountries} from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
   searchInput: document.querySelector('#search-box')
};

refs.searchInput.addEventListener('input', onSearch );

function onSearch(e) {
   e.preventDefault();

   const forms = e.target.value;
   console.log(forms);
};

