const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      state.messages.push({ id: Date.now(), message: state.newMessageBody })
      state.newMessageBody = ''
      return state
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.message
      return state
    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = message => ({ type: UPDATE_NEW_MESSAGE_BODY, message })
