import { ProfileImage, ProfileInfo } from '../../components'
import { MyPostsContainer } from '../../components/MyPosts/MyPostsContainer'

export const Profile = (props: any) => {
  let profile = props.store.getState().postReducer.profile

  return (
    <div className='profile'>
      <ProfileImage />
      <ProfileInfo profile={profile} />
      <MyPostsContainer store={props.store} />
    </div>
  )
}
