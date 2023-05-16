import { connect } from 'react-redux'
import { login } from '../../redux/reducers/auth-Reducer'
import { LoginForm } from './LoginForm'

type MapStateToPropsType = {
  isAuth: boolean
}

const Log = (props: any) => {
  const onSubmitLog = (formData: any) => {
    debugger
    const { email, password, rememberMe } = formData
    props.login(email, password, rememberMe)
  }

  if (props.isAuth) {
    return <div>Нажми Profile</div>
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmitLog={onSubmitLog} />
    </div>
  )
}

const mapStateToProps = (state: any): MapStateToPropsType => {
  return {
    isAuth: state.authReducer.isAuth
  }
}

export const Login = connect(mapStateToProps, { login })(Log)
