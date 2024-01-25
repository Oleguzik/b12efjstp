import axios from 'axios';

const backendAPI = {

    widthScreen : document.querySelector(`body`).getBoundingClientRect().width,
    filter : `Body parts`, // Body parts, Muscles, Equipment
    choiceExercises : undefined,
    pageForFilter : 1,
    pageForExercises : 1,


    async getRequestOnFilters() {

        const END_POINT = `filters`;
        const limit = this.widthScreen > 375 ? 12 : 7;

        const response = await axios.get(`https://energyflow.b.goit.study/api/${END_POINT}?filter=${this.filter}&page=${this.pageForFilter}&limit=${limit}`)
        return response.data

    }
,
    async getRequestOnExercises() {

        const END_POINT = `exercises`;
        const validFilter = this.filter.replace(/\s/g, '').toLowerCase();

        const limit = this.widthScreen > 768 ? 9 : 8;

        const response = await axios.get(`https://energyflow.b.goit.study/api/${END_POINT}?${validFilter}=${this.choiceExercises}&page=${this.pageForExercises}&limit=${limit}`)
        return response.data

    }
,
    async getRequestQuote() {

        const response = await axios.get(`https://energyflow.b.goit.study/api/quote`)
        return response.data

    }
,
    async getRequestInfoAboutExercise(id) {
        const END_POINT = `exercises`;

        const response = await axios.get(`https://energyflow.b.goit.study/api/${END_POINT}/${id}`)
        return response.data

    }
,
    async getRequestInfoAboutExercise(id, rate, email, review) {
        const END_POINT = `exercises`;

        const response = await axios.patch(`https://energyflow.b.goit.study/api/${END_POINT}/${id}/rating`, {
            "rete": rate,
            "email": email,
            "review": review,
        })
        return response.data

    }
,
    async registration(email) {

        const response = await axios.post('https://energyflow.b.goit.study/api/subscription', {
            email: email
        })

        return response.data

}
    
}

export default backendAPI;