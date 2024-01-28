import backendAPI from './js/backendAPI';

async function GetAllData() {
  // const filterData = await getFilterData(1, 8);
    const filterData = await backendAPI.getFilterData(1, 8);
  console.log(filterData);

    const OnExercises = await backendAPI.getOnExercises(1, 5, `air`);
    console.log(OnExercises);
    
    const QuoteOfTheDay = await backendAPI.getQuoteOfTheDay();
    console.log(QuoteOfTheDay);
       

    const ExerciseInfo = await backendAPI.getExerciseInfo(`64f389465ae26083f39b17a4`);
    console.log(ExerciseInfo);
    
    const sub = await backendAPI.subscription(`testt3243fdgfestergegereeg@gmail.com`);
  console.log(sub);

    const ExerciseRating = await backendAPI.updateExerciseRating({id: `64f389465ae26083f39b17a4`, rate: 5, email: `testtestergegereeg@gmail.com`, review: `text` });
  console.log(ExerciseRating);


}

GetAllData();

// backendAPI.testData(123);
