import getData from './api.js';

(async () => {
    console.log(await getData(1));
})();
