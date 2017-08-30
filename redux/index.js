import createStore from './createStore'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const store = createStore(rootReducer, rootSaga)

export default store
