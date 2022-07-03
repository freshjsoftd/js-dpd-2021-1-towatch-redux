import { put } from 'redux-saga/effects';
import {
  addToWatchError,
	addToWatchRequest,
	addToWatchSuccess,
	deleteToWatchError,
	deleteToWatchRequest,
	deleteToWatchSuccess,
	getToWatchesError,
	getToWatchesRequest,
	getToWatchesSuccess,
  updateToWatchError,
  updateToWatchRequest,
  updateToWatchSuccess,
} from '../store/actions/toWatchAction';
import movieService from '../api/movie-service';

export function* getMoviesSaga() {
	yield put(getToWatchesRequest());
	try {
		const movies = yield movieService.get('/').then(({ data }) => data);
		yield put(getToWatchesSuccess(movies));
	} catch (error) {
		yield put(getToWatchesError(error));
	}
}

export function* createMovieSaga({payload}) {
	yield put(addToWatchRequest());
  try {
    const newMovie = yield movieService.post('/', payload).then(({ data}) => data);
    yield put(addToWatchSuccess(newMovie))
  } catch (error) {
    yield put(addToWatchError(error))
  }
}

export function* updateMovieSaga({payload}){
  yield put(updateToWatchRequest());
  try {
    yield movieService.put(`/${payload.id}`, payload).then(({ data}) => data);
    yield put(updateToWatchSuccess(payload));
  } catch (error) {
    yield put(updateToWatchError(error));
  }
}

export function* deleteMovieSaga({payload}){
  yield put(deleteToWatchRequest());
  try {
    yield movieService.delete(`/${payload}`);
    yield put(deleteToWatchSuccess(payload));
  } catch (error) {
    yield put(deleteToWatchError(error))
  }
}