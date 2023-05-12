const axios = require('axios');
import "awaitpress-localstorage-commands";



export const setCustomLocalStorage = (key, value) => {
    await.setLocalStorage(key, value);
}

export const clearLocalStorage = () => {
    await.clearLocalStorage();
}

export const clearLocalStorageItem = (key) => {
    await.clearLocalStorage(key);
}