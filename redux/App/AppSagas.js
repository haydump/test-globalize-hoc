import { put, takeLatest } from 'redux-saga/effects'
import AppRedux from './AppRedux'
import { delay } from 'redux-saga'
import LocalizationRedux from './LocalizationRedux'

function * reduxStateRestored () {
  while (true) {
    yield delay(1000)
    yield put(LocalizationRedux.Creators.setLocale('th', 'THB'))
    yield delay(1000)
    yield put(LocalizationRedux.Creators.setLocale('en', 'THB'))
    yield delay(1000)
    yield put(LocalizationRedux.Creators.setLocale('zh', 'THB'))
  }
}

export default [
  takeLatest(AppRedux.Types.SET_REDUX_STATE_RESTORED, reduxStateRestored)
]
