import React from 'react'
import { authAPI } from '../../api/api'
import { Header } from '.'
import { withRouter } from '../../utils/withRouter'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/reducers/auth-Reducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.me().then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        this.props.setAuthUserData(id, email, login)
      }
    })
  }
  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login
})

export default connect(mapStateToProps, { setAuthUserData })(withRouter(HeaderContainer))
