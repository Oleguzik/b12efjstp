import axios from 'axios';
axios.defaults.baseURL = `https://energyflow.b.goit.study/api`;
// 1. Додати BASE URL
// 2. додати до всіх await конструкцію Try-Cath
// 3. інструкції в коментах

export async function getFilterData(
  page = 1,
  limit = this.widthScreen > 375 ? 12 : 7
) {
  const END_POINT = `filters`;
  // перевірка корректності пагінації
  // try {
  try {
    const response = await axios.get(`/${END_POINT}`, {
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
}

const backendAPI = {
  // pagination: {
  //   pageForFilter: 1,
  //   pageForExercises: 1,
  //   limit: 12
  // },
  // BASE_URL: `https://energyflow.b.goit.study/api`,
  widthScreen: document.querySelector(`body`).getBoundingClientRect().width,
  filter: `Muscles`, // Body parts, Muscles, Equipment
  choiceExercises: undefined,

  // async getFilterData(filter = 'Muscles') {

  // async getOnExercises(filter = 'muscles') {
  async getOnExercises(page = 1, limit = this.widthScreen > 768 ? 9 : 8) {
    const END_POINT = `exercises`;
    const validFilter = this.filter.replace(/\s/g, '').toLowerCase();

    try {
      const response = await axios.get(`/${END_POINT}`, {
        params: {
          [validFilter]: this.choiceExercises,
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

  // getQuoteOfTheDay()
  async getQuoteOfTheDay() {
    const END_POINT = `quote`;
    try {
      const response = await axios.get(`/${END_POINT}`);
      return response.data;
    } catch {
      return {
        author: '',
        quote: '',
      };
    }
  },

  // getExerciseInfo(id='')
  async getExerciseInfo(id = ``) {
    const END_POINT = `exercises`;
    try {
      const response = await axios.get(`${END_POINT}/${id}`);
      return response.data;
    } catch {
      return {
        _id: '',
      };
    }
  },

  // updateExerciseRating({id, rate, email, review})
  async updateExerciseRating({ id, rate, email, review }) {
    const END_POINT = `exercises`;

    try {
      const response = await axios.patch(`${END_POINT}/${id}/rating`, {
        rate,
        email,
        review,
      });

      return { result: true };
    } catch {
      return { result: false, message: '' };
    }
  },

  // subscription(email)
  async subscription(email) {
    const END_POINT = `subscription`;
    try {
      const response = await axios.post(`/${END_POINT}`, {
        email,
      });

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

backendAPI.getFilterData = getFilterData;

export default backendAPI;
