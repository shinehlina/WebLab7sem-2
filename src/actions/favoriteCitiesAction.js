export const ADD_FAVORITE = "ADD_FAVORITE"

export function addFavoriteCity(cityName) {
    return {
        type: ADD_FAVORITE,
        payload: cityName
    }
}