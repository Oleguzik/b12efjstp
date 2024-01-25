import axios from 'axios';


const widthScreen = document.querySelector(`body`).getBoundingClientRect().width;
let filter = `Body parts`; // Body parts, Muscles, Equipment
let choiceExercises;
let pageForFilter = 1;
let pageForExercises = 1;


async function getRequestOnFilters() {

    const END_POINT = `filters`;
    const limit = widthScreen > 375 ? 12 : 7;

  const response = await axios.get(`https://energyflow.b.goit.study/api/${END_POINT}?filter=${filter}&page=${pageForFilter}&limit=${limit}`)
    return response.data

}

async function getRequestOnExercises() {

    const END_POINT = `exercises`;
    const validFilter = filter.replace(/\s/g, '').toLowerCase();

    const limit = widthScreen > 768 ? 9 : 8;

  const response = await axios.get(`https://energyflow.b.goit.study/api/${END_POINT}?${validFilter}=${choiceExercises}&page=${pageForExercises}&limit=${limit}`)
    return response.data

}

async function getRequestQuote() {

  const response = await axios.get(`https://energyflow.b.goit.study/api/quote`)
    return response.data

}

async function getRequestInfoAboutExercise(id) {
    const END_POINT = `exercises`;

  const response = await axios.get(`https://energyflow.b.goit.study/api/${END_POINT}/${id}`)
    return response.data

}

async function getRequestInfoAboutExercise(id, rate, email, review) {
    const END_POINT = `exercises`;

    const response = await axios.patch(`https://energyflow.b.goit.study/api/${END_POINT}/${id}/rating`, {
        "rete": rate,
        "email": email,
        "review": review,
  })
    return response.data

}

async function registration(email) {

const response = await axios.post('https://energyflow.b.goit.study/api/subscription', {
    email: email
  })

    return response.data

}



