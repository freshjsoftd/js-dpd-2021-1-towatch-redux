import { createStore, applyMiddleware } from 'redux';
import toWatchReducer from './reducers/toWatchreducer'
import logger from 'redux-logger'


const middleWeare = applyMiddleware(logger)

export default createStore(toWatchReducer, middleWeare)

