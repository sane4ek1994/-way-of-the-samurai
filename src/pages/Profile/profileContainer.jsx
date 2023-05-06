import React from 'react'

import { Profile } from '.'
import { withRouter } from '../../utils/withRouter'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/reducers/postPage-reducer'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = 10
    }

    this.props.getUserProfile(userId)
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = state => ({
  profile: state.postReducer.profile
})

export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer))
