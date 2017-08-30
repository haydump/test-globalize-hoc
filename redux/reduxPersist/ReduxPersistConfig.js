import { AsyncStorage } from 'react-native'
import immutablePersistenceTransform from './ImmutablePersistenceTransform'

export default {
  active: true,
  // update reducerVersion each time reducer configuration changes to purge redux persisted storage
  reducerVersion: '0.1.0',
  storeConfig: {
    storage: AsyncStorage,
    // reducer keys that you do NOT want stored to persistence here
    blacklist: [
      'app'
    ],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    /*
    whitelist: [
    ],
    */
    transforms: [
      immutablePersistenceTransform
    ]
  },
  purgeKeys: (prevVersion, currentVersion) => {
    return null
  }
}
