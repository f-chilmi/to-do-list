import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

const store = createStore(
  rootReducer,
  applyMiddleware(
    promiseMiddleware,
    logger
  )
)

export default store