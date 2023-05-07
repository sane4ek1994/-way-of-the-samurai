import { Messages } from '.'
import { connect } from 'react-redux'
import { updateNewMessageBody, sendMessage } from '../../redux/reducers'

const mapStateToProps = state => {
  return {
    newMessageBody: state.dialogsReducer.newMessageBody,
    dialogs: state.dialogsReducer.dialogsData,
    messages: state.dialogsReducer.messages,
    isAuth: state.authReducer.isAuth
  }
}

export const MessagesContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  sendMessage
})(Messages)
