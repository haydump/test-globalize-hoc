import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { reducerPrefixFormat } from '../common'

const stateKey = 'app'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  redux_state_restored: false
})

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setReduxStateRestored: null
}, {
  prefix: reducerPrefixFormat(stateKey)
})

/* ------------- Reducers ------------- */
const setReduxStateRestored = (state) =>
  Immutable(state).merge({
    redux_state_restored: true
  })

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_REDUX_STATE_RESTORED]: setReduxStateRestored
})

const reducerMap = { [stateKey]: reducer }

/* ------------- Selectors ------------- */
const getReducerState = (state) => (state[stateKey])

/* ------------- Export ------------- */
export default {
  // default export
  INITIAL_STATE,
  Types,
  Creators,

  stateKey,
  getReducerState,
  reducerMap
}
