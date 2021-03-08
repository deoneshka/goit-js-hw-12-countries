import { error, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

function searchError() {
    error({
        title: 'Oh No!',
        text: 'There are no such countries!',
        delay: 3000
    });
};

function overElevenCountries() {
    error({
        title: 'Oh No!',
        text: 'The search result is too big, please specify the name of the country!',
        delay: 3000
    });
};

export default { searchError, overElevenCountries };