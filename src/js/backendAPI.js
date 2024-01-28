import axios from 'axios';
axios.defaults.baseURL = `https://energyflow.b.goit.study/api`;

const backendAPI = {
  widthScreen: document.querySelector(`body`).getBoundingClientRect().width,
  filter: `Muscles`, // Body part, Muscles, Equipment
  choiceExercises: undefined, // Приймає значення назви картки при кліку на ній (Exercises/Waist)

  getFilterData: async function (
    page = 1,
    limit = this.widthScreen > 375 ? 12 : 7
  ) {
    try {
      const response = await axios.get(`/filters`, {
        params: {
          filter: this.filter,
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

  getOnExercises: async function (
    page = 1,
    limit = this.widthScreen > 768 ? 9 : 8,
    keyword
  ) {
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
    } catch (error) {
      return { result: false, message: error.response.data.message };
    }
  },

  subscription: async function (email) {
    try {
      const response = await axios.post(`/subscription`, {
        email: email,
      });
      return {
        result: true,
        message:
          "We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow.You've just taken a significant step towards improving your fitness and well-being.",
      };
    } catch (error) {
      console.log(error);
      return { result: false, message: error.response.data.message };
    }
  },
};

export default backendAPI;
