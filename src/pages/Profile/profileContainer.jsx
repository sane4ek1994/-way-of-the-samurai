import React from 'react'
import { Profile } from '.'
import { withRouter } from '../../utils/withRouter'
import { connect } from 'react-redux'
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/reducers/postPage-reducer'
import { withAuthRedirect } from '../../utils/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = 10
    }

    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    )
  }
}

let mapStateToProps = state => ({
  profile: state.postReducer.profile,
  status: state.postReducer.status
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withAuthRedirect
)(withRouter(ProfileContainer))
