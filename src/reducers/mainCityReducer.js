import {
  GET_MAIN_REQUEST,
  GET_MAIN_SUCCESS,
  GET_MAIN_FAILED
} from "../actions/mainLocationCity";

export const initialState = {};

export function mainCityReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MAIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_MAIN_SUCCESS:
      return Object.assign({}, state, {
        mainCityInfo: action.payload,
        isFetching: false
      });
    case GET_MAIN_FAILED:
      // alert(`No info for city ${action.payload}`);
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}
