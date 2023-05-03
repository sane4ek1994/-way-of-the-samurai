import React from 'react'
import axios from 'axios'
import { Header } from '.'
import { withRouter } from '../../utils/withRouter'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/reducers/auth-Reducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {
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