import { getCitiesFromStorage, updateCityList } from "../util/localStorageUtil";

import {
  ADD_FAVORITE_REQUEST,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAILED,
  ADD_FAVORITE_NO_CITY,
  DELETE_FAVORITE
} from "../actions/favoriteCitiesAction";

export const initialState = {
  favoriteCities: getCitiesFromStorage(),
  errorMessage: ""
};

export function favoriteCitiesReducer(state = initialState, action) {
  var upFavoriteCities = state.favoriteCities.slice();
  var citiesInfo;
  var updatedCityInfo;
  switch (action.type) {
    case ADD_FAVORITE_REQUEST:
      updatedCityInfo = {
        cityName: action.payload,
        errorMessage: "",
        isFetching: true
      };
      upFavoriteCities.push(updatedCityInfo);
      return Object.assign({}, state, {
        favoriteCities: upFavoriteCities
      });
    case ADD_FAVORITE_SUCCESS:
      citiesInfo = upFavoriteCities.filter(
        a => a.cityName !== action.payload.cityName
      );
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
    case ADD_FAVORITE_NO_CITY:
      citiesInfo = upFavoriteCities.filter(a => a.cityName !== action.payload);
      updatedCityInfo = {
        cityName: action.payload,
        errorMessage: `No info for city ${action.payload}`,
        isFetching: false
      };
      citiesInfo.push(updatedCityInfo);
      return Object.assign({}, state, {
        favoriteCities: citiesInfo
      });
    case ADD_FAVORITE_FAILED:
      citiesInfo = upFavoriteCities.filter(a => a.cityName !== action.payload);
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
      upFavoriteCities.splice(action.payload, 1);
      updateCityList(upFavoriteCities);
      return Object.assign({}, state, {
        errorMessage: "",
        isFetching: false,
        favoriteCities: upFavoriteCities
      });
    default:
      return state;
  }
}
