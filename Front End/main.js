// main.js

import { callApi, processData, logData } from './API_fetcher.js';

document.addEventListener('DOMContentLoaded', function () {
    callApi()
        .then(processData)
        .then(logData)
        .catch(error => {
            console.error('Error: ', error);
        });
});


