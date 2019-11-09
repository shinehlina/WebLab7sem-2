import {
  ADD_FAVORITE_REQUEST,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAILED,
  ADD_FAVORITE_NO_CITY
} from "../actions/favoriteCitiesAction";

export const initialState = {
  // favoriteCities: ["Moscow"],
  favoriteCities: [],
  isFetching: false
};

export function favoriteCitiesReducer(state = initialState, action) {
  var upFavoriteCities = state.favoriteCities.slice();
  upFavoriteCities.push(action.payload);
  switch (action.type) {
    case ADD_FAVORITE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ADD_FAVORITE_SUCCESS:
      return Object.assign({}, state, {
        favoriteCities: upFavoriteCities,
        isFetching: false
      });
    case ADD_FAVORITE_NO_CITY:
      alert(`No info for city ${action.payload}`);
      return Object.assign({}, state, {
        isFetching: false
      });
    case ADD_FAVORITE_FAILED:
      alert(`Error occured`);
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}
