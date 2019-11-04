import {ADD_FAVORITE} from "../actions/favoriteCitiesAction"

export const initialState = {
  favoriteCities: ["Город1", "Город2"]
};

export function favoriteCitiesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            var upFavoriteCities = state.favoriteCities.slice();
            upFavoriteCities.push(action.payload);
          return Object.assign({}, state, {
              favoriteCities: upFavoriteCities
          })
    
        default:
          return state
      }
}
