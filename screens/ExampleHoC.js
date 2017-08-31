import { connect } from 'react-redux'
import ExampleComponent from './ExampleComponent'
import LocalizationRedux from '../redux/App/LocalizationRedux'

export default connect(
  (state, ownProps) => {
    const inState = LocalizationRedux.getReducerState(state)
    const locale = LocalizationRedux.getCurrentLocale(inState)
    return {
      locale
    }
  },
  (dispatch, ownProps) => ({
  })
)(ExampleComponent)
