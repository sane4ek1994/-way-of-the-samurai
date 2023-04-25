import React from 'react'
import axios from 'axios'
import { Profile } from '.'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/reducers/postPage-reducer'

export class ProfileAPIContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      this.props.setUserProfile(response.data)
    })
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = state => ({
  profile: state.profile
})

export const ProfileContainer = connect(mapStateToProps, { setUserProfile })(ProfileAPIContainer)
