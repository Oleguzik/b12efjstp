import backendAPI from './js/backendAPI';
import { getFilterData } from './js/backendAPI';

async function GetAllData() {
  const filterData = await getFilterData(1, 8);
  console.log(filterData);
}

GetAllData();
