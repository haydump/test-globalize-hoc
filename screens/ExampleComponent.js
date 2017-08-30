import React from 'react'
import { View } from 'react-native'
import { FormattedMessage } from 'react-native-globalize'

export default ({ style }) => (
  <View style={style}>
    <FormattedMessage
      message='hello'
      values={{ first: 'John', last: 'Doe' }}
    />
  </View>
)
