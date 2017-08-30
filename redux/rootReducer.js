import { combineReducers } from 'redux'
import * as reducers from './reducers'

/* ------------- Assemble The Reducers ------------- */
const allReducers = Object.keys(reducers)
  .reduce(
    (acc, k) => ({
      ...acc,
      ...reducers[k].reducerMap
    }),
    {}
  )

export default combineReducers(allReducers)
