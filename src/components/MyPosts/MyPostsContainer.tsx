import { connect } from 'react-redux'
import { MyPosts } from '.'
import { addPosts } from '../../redux/reducers'

const mapStateToProps = (state: any) => {
  return {
    posts: state.postReducer.postData,
    postText: state.postReducer.postText
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addPosts: (postText: string) => dispatch(addPosts(postText))
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
