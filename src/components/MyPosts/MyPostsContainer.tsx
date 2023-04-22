import { connect } from 'react-redux'
import { MyPosts } from '.'
import { addPosts, setChangeText } from '../../redux/reducers'

const mapStateToProps = (state: any) => {
  return {
    posts: state.postReducer.postData,
    postText: state.postReducer.postText
  }
}

export const MyPostsContainer = connect(mapStateToProps, {
  addPosts,
  setChangeText
})(MyPosts)
