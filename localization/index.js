/*
  Note: cldr.json is built by `react-native-globalize` `gulp` task``cldr` with this configuration
  ```
    const locales = [
    'en',           // English (United States)
    'en-GB',        // English (Great Britain)
    'th',           // Thai
    'vi',           // Vietnamese
    'zh',           // Chinese
    'zh-Hans',      // Chinese (Simplified)
    'zh-Hant',      // Chinese (Traditional)
  ];
  const currencies = [
    'THB',          // Thai Baht
    'USD',          // US Dollar
  ];
  const files = ['ca-gregorian', 'currencies', 'dateFields', 'numbers', 'timeZoneNames', 'languages'];
  ```
*/

import React from 'react'
import { connect } from 'react-redux'
import { FormattedWrapper } from 'react-native-globalize'
import { withProps, pure, compose as recompose } from 'recompose'
import LocalizationRedux from '../redux/App/LocalizationRedux'
import { languages, defaultLocale, defaultCurrency, additionalCLDR } from './languages'

export default recompose(
  connect(
    (state) => {
      const { locale, currency } = LocalizationRedux.getReducerState(state)
      return { locale, currency }
    },
    (dispatch) => ({
    })
  ),
  withProps((props) => ({
    locale: props.locale || defaultLocale,
    currency: props.currency || defaultCurrency
  })),
  pure
)(({ locale, currency, children }) => (
  <FormattedWrapper
    cldr={additionalCLDR}
    currency={currency}
    locale={locale}
    localeFallback
    messages={languages}
    warnOnMissingMessage={__DEV__}
  >
    {children}
  </FormattedWrapper>
))
