import AppConfig from '../constants/AppConfig'

const reducerPrefixFormat = (_key) => (AppConfig.name + '/reducer/' + _key + '/').toUpperCase()

export {
  reducerPrefixFormat
}
