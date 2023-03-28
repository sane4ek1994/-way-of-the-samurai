import { MyPosts, ProfileImage, ProfileInfo } from '../../components'

export const Profile = (props: any) => {
  return (
    <div className='profile'>
      <ProfileImage />
      <ProfileInfo />
      <MyPosts dispatch={props.dispatch} postText={props.postText} posts={props.posts} />
    </div>
  )
}
