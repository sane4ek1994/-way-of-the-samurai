import { ProfileImage, ProfileInfo } from '../../components'
import { MyPostsContainer } from '../../components/MyPosts/MyPostsContainer'

export const Profile = (props: any) => {
  return (
    <div className='profile'>
      <ProfileImage />
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}
