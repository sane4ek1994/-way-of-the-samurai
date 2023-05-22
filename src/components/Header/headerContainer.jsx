import { Header } from '.'
import { withRouter } from '../../utils/withRouter'
import { connect } from 'react-redux'
import { logout } from '../../redux/reducers/auth-Reducer'

const HeaderContainer = props => {
  return <Header {...props} />
}

let mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login
})

export default connect(mapStateToProps, { logout })(withRouter(HeaderContainer))
