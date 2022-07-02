import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from '../store/actions/actionTypes';
import { getMoviesSaga } from "./toWatchSagas";



function* rootSaga(){
  yield takeLatest(ACTION_TYPES.GET_MOVIES_ACTION, getMoviesSaga)
}

export default rootSaga;