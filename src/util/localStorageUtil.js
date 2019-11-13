export function getCitiesFromStorage() {
  var citiesString = window.localStorage.getItem("favoriteCities");
  if (citiesString === "" || citiesString === null) {
    return [];
  }
  return JSON.parse(citiesString);
}

export function updateCityList(updatesCityList) {
  window.localStorage.setItem("favoriteCities", JSON.stringify(updatesCityList));
  return updatesCityList;
}
