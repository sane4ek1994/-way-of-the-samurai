const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
  dialogsData: [
    {
      id: '1',
      name: 'Alex',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvwaJplxvK3UtOeCatI2g-gJCt-xRwo1C8g&usqp=CAU'
    },
    {
      id: '2',
      name: 'Ksuxa',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_YOcpPB1PxeJtAIyasitboh8RKkSFcCmNw&usqp=CAU'
    },
    {
      id: '3',
      name: 'Lev',
      src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg'
    },
    {
      id: '4',
      name: 'Maatvey',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_YOcpPB1PxeJtAIyasitboh8RKkSFcCmNw&usqp=CAU'
    },
    {
      id: '5',
      name: 'Andrey',
      src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg'
    }
  ],
  messages: [
    { id: '1', message: 'Hello!' },
    { id: '2', message: 'How are you?' },
    { id: '3', message: 'Yo!!' },
    { id: '4', message: 'qq!)' }
  ],
  newMessageBody: 'react Yo!'
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const stateCopy = { ...state }

      stateCopy.messages = [...state.messages]
      stateCopy.messages.push({ id: Date.now(), message: stateCopy.newMessageBody })
      stateCopy.newMessageBody = ''
      return stateCopy
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      const stateCopy = { ...state }

      stateCopy.newMessageBody = action.message
      return stateCopy
    }
    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = message => ({ type: UPDATE_NEW_MESSAGE_BODY, message })
