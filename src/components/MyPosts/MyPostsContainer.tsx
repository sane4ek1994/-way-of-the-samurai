import { MyPosts } from '.'
import { addPostsActionCreator, setChangeTextActionCreator } from '../../redux/reducers'

export const MyPostsContainer = (props: any) => {
  const state = props.store.getState()

  const addPosts = () => {
    props.store.dispatch(addPostsActionCreator())
  }

  const setChangeText = (textPost: string) => {
    const action = setChangeTextActionCreator(textPost)
    props.store.dispatch(action)
  }

  return (
    <MyPosts
      addPosts={addPosts}
      posts={state.postReducer.postData}
      postText={state.postReducer.postText}
      setChangeText={setChangeText}
    />
  )
}
