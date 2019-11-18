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
  isFetching: false,
  errorMessage: ""
};

export function favoriteCitiesReducer(state = initialState, action) {
  var upFavoriteCities = state.favoriteCities.slice();
  switch (action.type) {
    case ADD_FAVORITE_REQUEST:
      return Object.assign({}, state, {
        errorMessage: "",
        isFetching: true
      });
    case ADD_FAVORITE_SUCCESS:
      upFavoriteCities.push(action.payload);
      updateCityList(upFavoriteCities)
      return Object.assign({}, state, {
        errorMessage: "",
        favoriteCities: upFavoriteCities,
        isFetching: false
      });
    case ADD_FAVORITE_NO_CITY:
      return Object.assign({}, state, {
        errorMessage: `No info for city ${action.payload}`,
        isFetching: false
      });
    case ADD_FAVORITE_FAILED:
      return Object.assign({}, state, {
        errorMessage: `Error occured`,
        isFetching: false
      });
    case DELETE_FAVORITE:
      upFavoriteCities.splice(action.payload, 1);
      updateCityList(upFavoriteCities)
      return Object.assign({}, state, {
        errorMessage: "",
        isFetching: false,
        favoriteCities: upFavoriteCities
      });
    default:
      return state;
  }
}
