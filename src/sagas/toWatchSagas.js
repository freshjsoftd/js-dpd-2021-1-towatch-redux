import {put} from 'redux-saga/effects'
import { getToWatchesError, getToWatchesRequest, getToWatchesSuccess } from "../store/actions/toWatchAction";
import movieService from '../api/movie-service'


export function* getMoviesSaga(){
  yield put(getToWatchesRequest());
  try {
    const movies = yield movieService.get('/').then(({data}) => data);
    yield put(getToWatchesSuccess(movies))
  } catch (error) {
    yield put(getToWatchesError(error))
  }
}