import API from './js/fetchCountries';
import getRefs from './js/getRefs';
import countriesTemplate from './templates/country-list.hbs';
import countryTemplate from './templates/country-info.hbs';
import debounce from 'lodash.debounce';
import errors from './js/pnotifyErrors';
import './sass/styles.scss';

const refs = getRefs();

function renderCountriesList(countries) {
    const markupCountriesList = countriesTemplate(countries);
    refs.resultSearch.innerHTML = markupCountriesList;
};

function renderCountryInfo(country) {
    const markupCountry = countryTemplate(country);
    refs.resultSearch.innerHTML = markupCountry;
};

function searchCountry(event) {
    if (event.target.value === '') {
        return;
    };

    API.fetchCountries(event.target.value)
        .then(searchCountryResult)
        .catch(errors.searchError);
};

function searchCountryResult(result) {

    refs.resultSearch.innerHTML = '';

    if (result.status == '404') {
        throw new Error;
    };

    if (result.length > 2 && result.length < 11) {
        renderCountriesList(result);
    };

    if (result.length > 10) {
        errors.overElevenCountries();
    };

    if (result.length === 1) {
        renderCountryInfo(result);
    };
};

refs.countryInput.addEventListener('input', debounce(searchCountry, 500));