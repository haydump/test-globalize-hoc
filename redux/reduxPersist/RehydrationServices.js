import { Store } from 'redux'
import { persistStore } from 'redux-persist'
import ReduxPersistConfig from './ReduxPersistConfig'
import AppRedux from '../App/AppRedux'

const updateReducers = (store: Store<{}>) => {
  const reducerVersion = ReduxPersistConfig.reducerVersion
  const config = ReduxPersistConfig.storeConfig
  const storage = config.storage
  const startup = () => {
    store.dispatch(AppRedux.Creators.setReduxStateRestored())
  }

  // Check to ensure latest reducer version
  storage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== reducerVersion) {
      // Purge store
      const purgeKeys = ReduxPersistConfig.purgeKeys(localVersion, reducerVersion)
      if (purgeKeys) {
        persistStore(store, config, startup).purge(purgeKeys)
      } else {
        persistStore(store, config, startup).purge()
      }
      storage.setItem('reducerVersion', reducerVersion)
    } else {
      persistStore(store, config, startup)
    }
  }).catch(() => {
    persistStore(store, config, startup)
    storage.setItem('reducerVersion', reducerVersion)
  })
}

export default {updateReducers}
