import axios from 'axios';
axios.defaults.baseURL = `https://energyflow.b.goit.study/api`;
// 1. Додати BASE URL
// 2. додати до всіх await конструкцію Try-Cath
// 3. інструкції в коментах

const backendAPI = {
  // pagination: {
  //   pageForFilter: 1,
  //   pageForExercises: 1,
  //   limit: 12
  // },
  widthScreen: document.querySelector(`body`).getBoundingClientRect().width,
  filter: `Body part`, // Body part, Muscles, Equipment
  choiceExercises: `waist`,

  getFilterData: async function ( page = 1, limit = this.widthScreen > 375 ? 12 : 7) {
    try {
      const response = await axios.get(`/filters`, {
        params: {
          filter: `Muscles`,
          page,
          limit,
        },
      });
      return response.data;
    } catch {
      return {
        totalPages: 0,
        results: [],
      };
    }
  },

  getOnExercises: async function (page = 1, limit = this.widthScreen > 768 ? 9 : 8, keyword)
  {
    const validFilter = this.filter.replace(/\s/g, '').toLowerCase();

    try {
      const response = await axios.get(`/exercises`, {
        params: {
          [validFilter]: this.choiceExercises,
          keyword,
          page,
          limit,
        },
      });
      return response.data;
    } catch {
      return {
        totalPages: 0,
        results: [],
      };
    }
  },

  getQuoteOfTheDay: async function () {
    try {
      const response = await axios.get(`/quote`);
      return response.data;
    } catch {
      return {
        author: '',
        quote: '',
      };
    }
  },

  getExerciseInfo: async function (id = ``) {
    try {
      const response = await axios.get(`exercises/${id}`);
      return response.data;
    } catch {
      return {
        _id: '',
      };
    }
  },

  updateExerciseRating: async function ({ id, rate, email, review }) {
    try {
      const response = await axios.patch(`exercises/${id}/rating`, {
        rate,
        email,
        review,
      });

      return { result: true };
    } catch {
      return { result: false, message: '' };
    }
  },

  subscription: async function(email) {
    axios.post(`/subscription`,
    try {
      const response = await axios.post(`/subscription`, 
      {
        email: email,
      });
console.log(response.data)
      return {
        result: true,
        message:
          "We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow.You've just taken a significant step towards improving your fitness and well-being.",
      };
    } catch {
      return { result: false, message: '' };
    }
  },
};

// backendAPI.getFilterData = getFilterData;
// backendAPI.getOnExercises = getOnExercises;
// backendAPI.getQuoteOfTheDay = getQuoteOfTheDay;
// backendAPI.getExerciseInfo = getExerciseInfo;
// backendAPI.updateExerciseRating = updateExerciseRating;
// backendAPI.subscription = subscription;

export default backendAPI;
