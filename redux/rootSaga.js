import { all } from 'redux-saga/effects'
import * as sagas from './sagas'

/* ------------- Connect Types To Sagas ------------- */
const allSagas = Object.keys(sagas)
  .reduce(
    (acc, k) => ([
      ...acc,
      ...sagas[k]
    ]),
    []
  )

export default function * root () {
  yield all(allSagas)
}
