import { createStore, applyMiddleware } from 'redux';
import toWatchReducer from './reducers/toWatchreducer'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'


const sagaMiddleware = createSagaMiddleware();
const middleWeare = applyMiddleware(sagaMiddleware, logger);


export default createStore(toWatchReducer, composeWithDevTools(middleWeare))

sagaMiddleware.run(rootSaga)