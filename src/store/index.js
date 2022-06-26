import { createStore, applyMiddleware } from 'redux';
// import toWatchReducer from './reducers/toWatchreducer'
import rootReducer from './reducers'
import logger from 'redux-logger'

// function logger(store){
//   return function(next){
//     return function(action){
//       console.log('action is working', action)
//       fetch('/').then(() => next(action))
//     }
//   }
// }

const middleWeare = applyMiddleware(logger)

export default createStore(rootReducer, middleWeare)

