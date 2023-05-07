import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

export const withAuthRedirect = Component => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to='/login' />
      }
      return <Component {...this.props} />
    }
  }

  let mapStateToProps = state => {
    return {
      isAuth: state.authReducer.isAuth
    }
  }

  const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedRedirectComponent
}
