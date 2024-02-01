import backendAPI from './backendAPI';

const LOCAL_STORAGE_KEYS = {
  quote: 'quoteOfTheDay',
  favorites: 'favoritesExercises',
};

const localStorageAPI = {
  async getQuoteOfTheDay() {
    const date = getFormattedDate(new Date());
    const savedData = getDataFromLocalStorage(LOCAL_STORAGE_KEYS.quote);

    if (savedData && savedData.date === date) {
      return savedData;
    } else {
      const quoteData = await backendAPI.getQuoteOfTheDay();

      if (quoteData?.quote) {
        const dataToSave = { ...quoteData, date };
        localStorage.setItem(
          LOCAL_STORAGE_KEYS.quote,
          JSON.stringify(dataToSave)
        );
        return dataToSave;
      }
      return quoteData;
    }
  },

  getFavorites() {
    const favoritesData = getDataFromLocalStorage(LOCAL_STORAGE_KEYS.favorites);

    return favoritesData ? favoritesData : [];
  },

  addItemToFavorites(exercise = {}) {
    let dataToSave = getDataFromLocalStorage(LOCAL_STORAGE_KEYS.favorites);

    if (!dataToSave) {
      dataToSave = [];
    }

    dataToSave.push(exercise);

    localStorage.setItem(
      LOCAL_STORAGE_KEYS.favorites,
      JSON.stringify(dataToSave)
    );
  },

  deleteItemFromFavorites(id = '') {
    const favoritesData = getDataFromLocalStorage(LOCAL_STORAGE_KEYS.favorites);

    if (favoritesData && id !== '') {
      const dataToSave = favoritesData.filter(item => item._id !== id);
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.favorites,
        JSON.stringify(dataToSave)
      );
    }
  },
};

export default localStorageAPI;

function getDataFromLocalStorage(key = '') {
  let storedData = localStorage.getItem(key);

  if (storedData) {
    try {
      storedData = JSON.parse(storedData);
    } catch {
      storedData = null;
    }
  }

  return storedData;
}

function getFormattedDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}
