export const ADD_TO_WATCH = 'ADD_TO_WATCH';
export const addToWatch = (toWatch) => {
  return {
    type: ADD_TO_WATCH,
    payload: toWatch
  }
}
export const DEL_TO_WATCH = 'DEL_TO_WATCH';
export const delToWatch = (id) => {
  return {
    type: DEL_TO_WATCH,
    payload: id
  }
}
export const TOGGLE_TO_WATCH = 'TOGGLE_TO_WATCH';
export const toggleToWatch = (id) => {
  return {
    type: TOGGLE_TO_WATCH,
    payload: id
  }
}
export const GET_MOVIES = 'GET_MOVIES';
export const getMovies = (movies) => {
  return {
    type: GET_MOVIES,
    payload: movies
  }
}
