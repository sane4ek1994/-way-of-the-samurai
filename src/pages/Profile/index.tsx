import { MyPostsContainer, ProfileImage, ProfileInfo } from '../../components'

export const Profile = (props: any) => {
  return (
    <div className='profile'>
      <ProfileImage />
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}
