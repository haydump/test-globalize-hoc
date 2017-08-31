import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import LocalizationWrapper from './localization'
import store from './redux'
import ExampleComponent from './screens/ExampleComponent'
import ExampleHoC from './screens/ExampleHoC'

const Screen = () => (
  <View style={{flex: 1}}>
    <ExampleComponent style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
    <ExampleHoC style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
  </View>
)

const StackNav = StackNavigator({
  Index: {
    screen: Screen
  }
}, {
  initialRouteName: 'Index',
  headerMode: 'none'
})

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <LocalizationWrapper>
          <View style={{flex: 1}}>
            <Screen />
            <StackNav style={{flex: 1}} />
          </View>
        </LocalizationWrapper>
      </Provider>
    )
  }
}
