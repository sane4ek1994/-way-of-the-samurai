const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

export const postReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg',
        text: state.postText
      }

      state.postData.push(newPost)
      state.postText = ''
      return state
    case UPDATE_POST_TEXT:
      state.postText = action.textPost
      return state
    default:
      return state
  }
}

export const addPostsActionCreator = () => ({ type: ADD_POST })
export const setChangeTextActionCreator = textPost => ({ type: UPDATE_POST_TEXT, textPost })
