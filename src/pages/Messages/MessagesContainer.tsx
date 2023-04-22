import { Messages } from '.'
import { connect } from 'react-redux'
import { updateNewMessageBody, sendMessage } from '../../redux/reducers'

const mapStateToProps = (state: any) => {
  return {
    newMessageBody: state.dialogsReducer.newMessageBody,
    dialogs: state.dialogsReducer.dialogsData,
    messages: state.dialogsReducer.messages
  }
}

export const MessagesContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  sendMessage
})(Messages)
