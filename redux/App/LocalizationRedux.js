import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { reducerPrefixFormat } from '../common'
import { defaultLocale, defaultCurrency } from '../../localization/languages'

const stateKey = 'localization'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  locale: null,
  currency: null
})

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setLocale: ['locale', 'currency']
}, {
  prefix: reducerPrefixFormat(stateKey)
})

/* ------------- Reducers ------------- */

const setLocale = (state, { locale, currency }) => {
  let _locale = locale || state.locale
  let _currency = currency || state.currency
  return Immutable(state).merge({
    locale: _locale,
    currency: _currency
  })
}

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOCALE]: setLocale
})

const reducerMap = { [stateKey]: reducer }

/* ------------- Selectors ------------- */
const getReducerState = (state) => (state[stateKey])
const getCurrentLocale = (reducerState) => {
  const { locale } = reducerState
  return locale || defaultLocale
}
const getCurrentCurrency = (reducerState) => {
  const { currency } = reducerState
  return currency || defaultCurrency
}
const getLocaleMessage = (reducerState) => (messages) => {
  const locale = getCurrentLocale(reducerState)
  return (
    (typeof messages === 'string')
    ? messages
    : (
      messages[locale] != null
      ? messages[locale]
      : messages[defaultLocale]
    )
  ) || ''
}

/* ------------- Export ------------- */
export default {
  getCurrentLocale,
  getCurrentCurrency,
  getLocaleMessage,

  // default export
  INITIAL_STATE,
  Types,
  Creators,

  stateKey,
  getReducerState,
  reducerMap
}
