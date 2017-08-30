import { connect } from 'react-redux'
import ExampleComponent from './ExampleComponent'

/*
import { compose as recompose } from 'recompose'

export default recompose(
  connect(
    (state, ownProps) => ({
    }),
    (dispatch, ownProps) => ({
    })
  )
)(ExampleComponent)
*/

export default connect(
  (state, ownProps) => ({
  }),
  (dispatch, ownProps) => ({
  })
)(ExampleComponent)
