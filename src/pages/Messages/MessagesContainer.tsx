import { Messages } from '.'
import { connect } from 'react-redux'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/reducers'

const mapStateToProps = (state: any) => {
  return {
    newMessageBody: state.dialogsReducer.newMessageBody,
    dialogs: state.dialogsReducer.dialogsData,
    messages: state.dialogsReducer.messages
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateNewMessageBody: (message: string) => dispatch(updateNewMessageBodyCreator(message)),
    onSendMessageClick: () => dispatch(sendMessageCreator())
  }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
