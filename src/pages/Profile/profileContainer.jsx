import React from 'react'
import axios from 'axios'
import { Profile } from '.'
import { withRouter } from '../../utils/withRouter'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/reducers/postPage-reducer'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = 10
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
      this.props.setUserProfile(response.data)
    })
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = state => ({
  profile: state.postReducer.profile
})

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer))
