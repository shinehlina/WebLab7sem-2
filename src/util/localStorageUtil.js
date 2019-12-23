export function getCitiesFromStorage() {
  var citiesString = window.localStorage.getItem("favoriteCities");
  if (citiesString === "" || citiesString === null) {
    return [];
  }
  var cities = JSON.parse(citiesString);
  var resultArray = [];
  for (let i = 0; i < cities.length; i++) {
    resultArray.push({
      cityName: cities[i],
      isFetching: true
    });
  }
  return resultArray;
}

export function updateCityList(updatesCityList) {
  window.localStorage.setItem(
    "favoriteCities",
    JSON.stringify(updatesCityList.map(cityInfo => cityInfo.cityName))
  );
  return updatesCityList;
}
