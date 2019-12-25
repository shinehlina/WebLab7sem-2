export function getCitiesFromStorage() {
  var citiesString = window.localStorage.getItem("favoriteCities");
  if (citiesString === "" || citiesString === null) {
    return [];
  }
  var cities = JSON.parse(citiesString);
  return cities;
}

export function updateCityList(updatesCityList) {
  window.localStorage.setItem(
    "favoriteCities",
    JSON.stringify(updatesCityList.filter(cityInfo => cityInfo.errorMessage === "").map(cityInfo => cityInfo.cityName))
  );
  return updatesCityList;
}
