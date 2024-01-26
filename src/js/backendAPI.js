import axios from 'axios';

// 1. Додати BASE URL
// 2. додати до всіх await конструкцію Try-Cath
// 3. інструкції в коментах


const backendAPI = {
  // pagination: {
  //     page: 1,
  //     limit: 12
  // }

  widthScreen: document.querySelector(`body`).getBoundingClientRect().width,
  filter: `Body parts`, // Body parts, Muscles, Equipment
  choiceExercises: undefined,
  pageForFilter: 1,
  pageForExercises: 1,

  // async getFilterData(filter = 'Muscles') {
  async getRequestOnFilters() {
    const END_POINT = `filters`;
    const limit = this.widthScreen > 375 ? 12 : 7;

    // перевірка корректності пагінації
    // try {

    const response = await axios.get(
      `https://energyflow.b.goit.study/api/${END_POINT}?filter=${this.filter}&page=${this.pageForFilter}&limit=${limit}`
    );

    // catch {
    //     return {
    //         "totalPages": 0,
    //         "results": []
    //     }
    //   }

    return response.data;
  },

  // async getOnExercises(filter = 'muscles') {
  async getRequestOnExercises() {
    const END_POINT = `exercises`;
    const validFilter = this.filter.replace(/\s/g, '').toLowerCase();

    const limit = this.widthScreen > 768 ? 9 : 8;

    const response = await axios.get(
      `https://energyflow.b.goit.study/api/${END_POINT}?${validFilter}=${this.choiceExercises}&page=${this.pageForExercises}&limit=${limit}`
    );

    // catch {
    //     return {
    //         "totalPages": 0,
    //         "results": []
    //     }
    //   }
    return response.data;
  },

  // getQuoteOfTheDay()
  async getRequestQuote() {
    const response = await axios.get(
      `https://energyflow.b.goit.study/api/quote`
    );

    // catch {
    //     return {
    //         "author": '',
    //         "quote": ''
    //     }
    //   }

    return response.data;
  },

  // getExerciseInfo(id='')
  async getRequestInfoAboutExercise(id) {
    const END_POINT = `exercises`;

    const response = await axios.get(
      `https://energyflow.b.goit.study/api/${END_POINT}/${id}`
    );

    // catch {
    //     return {
    //         "_id": ''
    //     }
    //   }

    return response.data;
  },

  // updateExerciseRating({id, rate, email, review})
  async getRequestInfoAboutExercise(id, rate, email, review) {
    const END_POINT = `exercises`;

    const response = await axios.patch(
      `https://energyflow.b.goit.study/api/${END_POINT}/${id}/rating`,
      {
        rate,
        email,
        review,
      }
    );

    //   return {result: true }
    // catch {
    //     return {result: false, message: }
    //   }

    return response.data;
  },

  // subscription(email)
  async registration(email) {
    const response = await axios.post(
      'https://energyflow.b.goit.study/api/subscription',
      {
        email: email,
      }
    );

    //   return {result: true, message: '...' }
    // catch {
    //     return {result: false, message: ''}
    //   }

    return response.data;
  },
};

export default backendAPI;
