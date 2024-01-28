// import backendAPI from './backendAPI';

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
      //   const quoteData = await backendAPI.getQuoteOfTheDay();

      // testData
      const quoteData = getTestQuoteData();

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

    return favoritesData ? favoritesData : getTestArrayData();
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

function getTestQuoteData() {
  return {
    author: 'Muhammad Ali',
    quote:
      "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'",
  };
}

function getTestArrayData() {
  const testData = [
    {
      _id: '64f389465ae26083f39b1af6',
      bodyPart: 'lower legs',
      equipment: 'body weight',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/1387.gif',
      name: 'one leg floor calf raise',
      target: 'calves',
      rating: 4.33,
      description:
        "Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",
      burnedCalories: 42,
      time: 3,
      popularity: 108,
    },
    {
      _id: '64f389465ae26083f39b1af0',
      bodyPart: 'lower legs',
      equipment: 'dumbbell',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/1381.gif',
      name: 'dumbbell seated one leg calf raise - palm up',
      target: 'calves',
      description:
        "Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",
      rating: 3,
      burnedCalories: 271,
      time: 3,
      popularity: 158,
    },
    {
      _id: '64f389465ae26083f39b19e5',
      bodyPart: 'lower legs',
      equipment: 'sled machine',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0742.gif',
      name: 'sled forward angled calf raise',
      target: 'calves',
      description:
        "Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",
      rating: 3,
      burnedCalories: 192,
      time: 3,
      popularity: 75,
    },
    {
      _id: '64f389465ae26083f39b1806',
      bodyPart: 'lower legs',
      equipment: 'barbell',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0108.gif',
      name: 'barbell standing leg calf raise',
      target: 'calves',
      description:
        "Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",
      rating: 4,
      burnedCalories: 201,
      time: 3,
      popularity: 366,
    },
    {
      _id: '64f389465ae26083f39b1af7',
      bodyPart: 'lower legs',
      equipment: 'rope',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/1388.gif',
      name: 'peroneals stretch',
      target: 'calves',
      description:
        "Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",
      rating: 3,
      burnedCalories: 127,
      time: 3,
      popularity: 2,
    },
    {
      _id: '64f389465ae26083f39b1b00',
      bodyPart: 'lower legs',
      equipment: 'body weight',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/1397.gif',
      name: 'standing calves',
      target: 'calves',
      description:
        "Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",
      rating: 3,
      burnedCalories: 294,
      time: 3,
      popularity: 3,
    },
    {
      _id: '64f389465ae26083f39b1ae3',
      bodyPart: 'lower legs',
      equipment: 'body weight',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/1368.gif',
      name: 'ankle circles',
      target: 'calves',
      description:
        "Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",
      rating: 3,
      burnedCalories: 266,
      time: 3,
      popularity: 74,
    },
    {
      _id: '64f389465ae26083f39b1a5d',
      bodyPart: 'lower legs',
      equipment: 'band',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/1000.gif',
      name: 'band single leg reverse calf raise',
      target: 'calves',
      description:
        "Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",
      rating: 3,
      burnedCalories: 289,
      time: 3,
      popularity: 111,
    },
    {
      _id: '64f389465ae26083f39b1ae4',
      bodyPart: 'lower legs',
      equipment: 'band',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/1369.gif',
      name: 'band two legs calf raise - (band under both legs) v. 2',
      target: 'calves',
      description:
        "Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",
      rating: 3,
      burnedCalories: 292,
      time: 3,
      popularity: 2,
    },
    {
      _id: '64f389465ae26083f39b1af3',
      bodyPart: 'lower legs',
      equipment: 'sled machine',
      gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/1384.gif',
      name: 'hack one leg calf raise',
      target: 'calves',
      description:
        "Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",
      rating: 3,
      burnedCalories: 286,
      time: 3,
      popularity: 105,
    },
  ];

  localStorage.setItem(LOCAL_STORAGE_KEYS.favorites, JSON.stringify(testData));
  return testData;
}
