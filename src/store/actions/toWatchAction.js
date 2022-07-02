import ACTION_TYPES from './actionTypes'
// Creating
export const addToWatchAction = (toWatch) => {
  return {
    type: ACTION_TYPES.POST_MOVIE_ACTION,
    payload: toWatch
  }
}
export const addToWatchRequest = () => {
  return {
    type: ACTION_TYPES.POST_MOVIE_REQUEST,
  }
}
export const addToWatchSuccess = (toWatch) => {
  return {
    type: ACTION_TYPES.POST_MOVIE_SUCCESS,
    payload: toWatch
  }
}
export const addToWatchError = (error) => {
  return {
    type: ACTION_TYPES.POST_MOVIE_ERROR,
    payload: error
  }
}
// Updating
export const updateToWatchAction = (toWatch) => {
  return {
    type: ACTION_TYPES.PUT_MOVIE_ACTION,
    payload: toWatch
  }
}
export const updateToWatchRequest = () => {
  return {
    type: ACTION_TYPES.PUT_MOVIE_REQUEST,
  }
}
export const updateToWatchSuccess = (toWatch) => {
  return {
    type: ACTION_TYPES.PUT_MOVIE_SUCCESS,
    payload: toWatch
  }
}
export const updateToWatchError = (error) => {
  return {
    type: ACTION_TYPES.PUT_MOVIE_ERROR,
    payload: error
  }
}
// Deleting
export const deleteToWatchAction = (id) => {
  return {
    type: ACTION_TYPES.DELETE_MOVIE_ACTION,
    payload: id
  }
}
export const deleteToWatchRequest = () => {
  return {
    type: ACTION_TYPES.DELETE_MOVIE_REQUEST,
  }
}
export const deleteToWatchSuccess = (id) => {
  return {
    type: ACTION_TYPES.DELETE_MOVIE_SUCCESS,
    payload: id
  }
}
export const deleteToWatchError = (error) => {
  return {
    type: ACTION_TYPES.DELETE_MOVIE_ERROR,
    payload: error
  }
}
// Getting
export const getToWatchesAction = () => {
  return {
    type: ACTION_TYPES.GET_MOVIES_ACTION,
    // payload: movies
  }
}
export const getToWatchesRequest = () => {
  return {
    type: ACTION_TYPES.GET_MOVIES_REQUEST,
  }
}
export const getToWatchesSuccess = (movies) => {
  return {
    type: ACTION_TYPES.GET_MOVIES_SUCCESS,
    payload: movies
  }
}
export const getToWatchesError = (error) => {
  return {
    type: ACTION_TYPES.GET_MOVIES_ERROR,
    payload: error
  }
}



