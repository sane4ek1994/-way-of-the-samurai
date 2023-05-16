import { Post, TPost } from '../Post'
import { PostForm } from './PostForm'

import styles from './post.module.css'

type TPostText = {
  postText: string
}

export const MyPosts = (props: any) => {
  const onAddPosts = (values: TPostText) => {
    props.addPosts(values.postText)
  }

  return (
    <div className={styles.post}>
      <h3>My post</h3>
      <div className={styles.new_post}>
        <PostForm onAddPosts={onAddPosts} />
      </div>
      <div>
        {props.posts?.map((post: TPost) => (
          <Post src={post.src} key={post.id} id={''} text={post.text} />
        ))}
      </div>
    </div>
  )
}
