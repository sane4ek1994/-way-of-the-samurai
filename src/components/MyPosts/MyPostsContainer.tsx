import { connect } from 'react-redux'
import { MyPosts } from '.'
import { addPostsActionCreator, setChangeTextActionCreator } from '../../redux/reducers'

const mapStateToProps = (state: any) => {
  return {
    posts: state.postReducer.postData,
    postText: state.postReducer.postText
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addPosts: () => dispatch(addPostsActionCreator()),
    setChangeText: (textPost: string) => dispatch(setChangeTextActionCreator(textPost))
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
