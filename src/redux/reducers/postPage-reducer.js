const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

const initialState = {
  postData: [
    {
      id: '1',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_YOcpPB1PxeJtAIyasitboh8RKkSFcCmNw&usqp=CAU',
      text: 'Hello! I Alex!'
    },
    { id: '2', src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg', text: 'QQ' },
    {
      id: '3',
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
        id: `${Date.now()}`,
        src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg',
        text: state.postText
      }

      return {
        ...state,
        postData: [...state.postData, newPost],
        postText: ''
      }

    case UPDATE_POST_TEXT:
      return {
        ...state,
        postText: action.textPost
      }

    default:
      return state
  }
}

export const addPosts = () => ({ type: ADD_POST })
export const setChangeText = textPost => ({ type: UPDATE_POST_TEXT, textPost })
