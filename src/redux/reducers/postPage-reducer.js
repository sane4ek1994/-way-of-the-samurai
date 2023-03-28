const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

const initialState = {
  postData: [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_YOcpPB1PxeJtAIyasitboh8RKkSFcCmNw&usqp=CAU',
      text: 'Hello! I Alex!'
    },
    { src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg', text: 'QQ' },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvwaJplxvK3UtOeCatI2g-gJCt-xRwo1C8g&usqp=CAU',
      text: 'What is your nature name?'
    }
  ],
  postText: 'alone samuray way |`_`|'
}

export const postReducer = (state = initialState, action) => {
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
