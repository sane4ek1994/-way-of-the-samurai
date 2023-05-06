import React from 'react'
import { Header } from '.'
import { withRouter } from '../../utils/withRouter'
import { connect } from 'react-redux'
import { getAuthUserData } from '../../redux/reducers/auth-Reducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }
  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login
})

export default connect(mapStateToProps, { getAuthUserData })(withRouter(HeaderContainer))
