import { updateCityList } from "../util/localStorageUtil";

import {
  GET_FAVORITE_REQUEST,
  GET_FAVORITE_SUCCESS,
  GET_FAVORITE_FAILED,
  GET_FAVORITE_NO_CITY,
  DELETE_FAVORITE,
  GET_ALL_CITIES_SUCCESS
} from "../actions/favoriteCitiesAction";

export const initialState = {
  favoriteCities: [],
  areFetching: true,
  errorMessage: ""
};

export function favoriteCitiesReducer(state = initialState, action) {
  var citiesInfo;
  var updatedCityInfo;
  switch (action.type) {
    case GET_ALL_CITIES_SUCCESS:
      var info = action.payload.map(city => ({
        cityName: city,
        isFetching: true,
        errorMessage: ""
      }));
      return Object.assign({}, state, {
        areFetching: false,
        favoriteCities: info
      });
    case GET_FAVORITE_REQUEST:
      citiesInfo = state.favoriteCities
        .slice()
        .filter(
          city => !(city.errorMessage !== "" && city.isFetching === false)
        );
      updatedCityInfo = {
        cityName: action.payload,
        errorMessage: "",
        isFetching: true
      };
      citiesInfo.push(updatedCityInfo);
      return Object.assign({}, state, {
        favoriteCities: citiesInfo,
        areFetching: false
      });
    case GET_FAVORITE_SUCCESS:
      citiesInfo = state.favoriteCities
        .slice()
        .filter(a => a.cityName !== action.payload.cityName);
      updatedCityInfo = {
        cityName: action.payload.cityName,
        cityInfo: action.payload.data,
        errorMessage: "",
        isFetching: false
      };
      citiesInfo.push(updatedCityInfo);
      updateCityList(citiesInfo);
      return Object.assign({}, state, {
        favoriteCities: citiesInfo
      });
    case GET_FAVORITE_NO_CITY:
      citiesInfo = state.favoriteCities
        .slice()
        .filter(a => a.cityName !== action.payload);
      updatedCityInfo = {
        cityName: action.payload,
        errorMessage: `No info for city ${action.payload}`,
        isFetching: false
      };
      citiesInfo.push(updatedCityInfo);
      return Object.assign({}, state, {
        favoriteCities: citiesInfo
      });
    case GET_FAVORITE_FAILED:
      citiesInfo = state.favoriteCities
        .slice()
        .filter(a => a.cityName !== action.payload);
      updatedCityInfo = {
        cityName: action.payload,
        errorMessage: `Error occured`,
        isFetching: false
      };
      citiesInfo.push(updatedCityInfo);
      return Object.assign({}, state, {
        favoriteCities: citiesInfo
      });
    case DELETE_FAVORITE:
      var arrayCopy = state.favoriteCities.slice();
      arrayCopy.splice(action.payload, 1);
      updateCityList(arrayCopy);
      return Object.assign({}, state, {
        errorMessage: "",
        isFetching: false,
        favoriteCities: arrayCopy
      });
    default:
      return state;
  }
}
