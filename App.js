import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import LocalizationWrapper from './localization'
import store from './redux'
import ExampleComponent from './screens/ExampleComponent'
import ExampleHoC from './screens/ExampleHoC'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <LocalizationWrapper>
          <View style={{flex: 1}}>
            <ExampleComponent style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
            <ExampleHoC style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
          </View>
        </LocalizationWrapper>
      </Provider>
    )
  }
}
