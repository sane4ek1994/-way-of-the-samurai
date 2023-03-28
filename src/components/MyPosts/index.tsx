import { useRef } from 'react'
import { addPostsActionCreator, setChangeTextActionCreator } from '../../redux/reducers'
import { Post, TPost } from '../Post'

import styles from './post.module.css'

export const MyPosts = (props: any) => {
  const newPostElement = useRef<HTMLTextAreaElement>(null)

  const addPosts = () => {
    props.dispatch(addPostsActionCreator())
  }

  const setChangeText = () => {
    let textPost = newPostElement.current?.value
    props.dispatch(setChangeTextActionCreator(textPost))
  }

  return (
    <div className={styles.post}>
      <h3>My post</h3>
      <div className={styles.new_post}>
        <textarea onChange={setChangeText} ref={newPostElement} value={props.postText} className={styles.post__input} />
        <button onClick={addPosts}>Add post</button>
      </div>
      <div>
        {props.posts?.map((post: TPost) => (
          <Post src={post.src} text={post.text} />
        ))}
      </div>
    </div>
  )
}
