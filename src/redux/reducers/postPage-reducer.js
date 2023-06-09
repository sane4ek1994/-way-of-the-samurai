import { profileAPI, userAPI } from '../../api/api'

const ADD_POST = 'ADD_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const REMOVE_POST = 'REMOVE_POST'

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
  profile: null,
  status: ''
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: `${Date.now()}`,
        src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg',
        text: action.postText
      }

      return {
        ...state,
        postData: [...state.postData, newPost],
        postText: ''
      }

    case REMOVE_POST:
      return {
        ...state,
        postData: state.postData.filter(post => post.id !== action.id)
      }

    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      }

    default:
      return state
  }
}

export const addPosts = postText => ({ type: ADD_POST, postText })
export const removePosts = id => ({ type: REMOVE_POST, id })
const setUserProfile = profile => ({ type: SET_USERS_PROFILE, profile })
const setUserStatus = status => ({ type: SET_USER_STATUS, status })

export const getUserProfile = userId => dispatch => {
  userAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data))
  })
}

export const getUserStatus = userId => dispatch => {
  profileAPI.getUserStatus(userId).then(response => {
    dispatch(setUserStatus(response.data))
  })
}

export const updateUserStatus = userId => dispatch => {
  profileAPI.setUserStatus(userId).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(response.data.message))
    }
  })
}
