import { getCitiesFromStorage } from "../util/localStorageUtil";

export const GET_FAVORITE_REQUEST = "ADD_FAVORITE_REQUEST";
export const GET_FAVORITE_SUCCESS = "ADD_FAVORITE_SUCCESS";
export const GET_FAVORITE_FAILED = "ADD_FAVORITE_FAILED";
export const GET_FAVORITE_NO_CITY = "ADD_FAVORITE_NO_CITY";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const GET_ALL_CITIES_SUCCESS = "GET_ALL_CITIES_SUCCESS";
export const DELETE_CITY_FAILED = "DELETE_CITY_FAILED";
export const SAVE_FAVORITE_FAILED = "SAVE_FAVORITE_FAILED";

export function deleteFavoriteCity(cityIndex, cityName) {
  return dispatch => {
    dispatch({
      type: DELETE_FAVORITE,
      payload: cityIndex
    });
  };
}

  export function fetchCitiesNames() {
    return dispatch => {
      var names = getCitiesFromStorage();
      for (var i = 0; i < names.length; i++) {
        dispatch(getCityInfo(names[i]));
      }
      dispatch({
        type: GET_ALL_CITIES_SUCCESS,
        payload: names
      });
    };
  }
  let clientKey = "ade7e1ffdaf68377d9167f51d8def411";

  export function getCityInfo(cityName) {
    return dispatch => {
      dispatch({
        type: GET_FAVORITE_REQUEST,
        payload: cityName
      });
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${clientKey}`
      )
        .then(response => {
          if (!response.ok) {
            throw Error(response.status);
          }
          return response;
        })
        .then(data => data.json())
        .then(json => {
          dispatch({
            type: GET_FAVORITE_SUCCESS,
            payload: {
              cityName: cityName,
              data: json
            }
          });
        })
        .catch(e => {
          if (e.message !== "404") {
            dispatch({
              type: GET_FAVORITE_FAILED,
              payload: e.message
            });
          } else {
            dispatch({
              type: GET_FAVORITE_NO_CITY,
              payload: cityName
            });
          }
        });
    };
  }

  // export function addAndGet(cityName) {
  //   return dispatch => {
  //     dispatch(getCityInfo(cityName));
  //     dispatch(addCityToList(cityName));
  //   };
  // }

  // function addCityToList(cityName) {
  //   return dispatch => {
  //     fetch(`${server}/favorites`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ cityName: cityName })
  //     }).catch(e => {
  //       return dispatch({
  //         type: SAVE_FAVORITE_FAILED,
  //         payload: null
  //       });
  //     });
  //   };
// }
