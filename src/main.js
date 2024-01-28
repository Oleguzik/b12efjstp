import backendAPI from './js/backendAPI';

async function GetAllData() {
  // const filterData = await getFilterData(1, 8);
  const filterData = await backendAPI.getFilterData(1, 8);
  console.log(filterData);

  // // const filterData = await getFilterData(1, 8);
  // const filterData = await backendAPI.getFilterData(1, 8);
  // console.log(filterData);

  // // const filterData = await getFilterData(1, 8);
  // const filterData = await backendAPI.getFilterData(1, 8);
  // console.log(filterData);

  // // const filterData = await getFilterData(1, 8);
  // const filterData = await backendAPI.getFilterData(1, 8);
  // console.log(filterData);

  // // const filterData = await getFilterData(1, 8);
  // const filterData = await backendAPI.getFilterData(1, 8);
  // console.log(filterData);
}

GetAllData();

// backendAPI.testData(123);
