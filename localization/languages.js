export const languages = {
  en: require('./en.json'),
  th: require('./th.json'),
  zh: require('./zh.json')
}
export const flagCodes = {
  en: 'GB',
  th: 'TH',
  zh: 'CN'
}

export const availableLocales = Object.keys(languages)

export const defaultLocale = 'en'
export const defaultCurrency = 'THB'
export const additionalCLDR = [require('./cldr.json')]
