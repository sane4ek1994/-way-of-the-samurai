import { Messages } from '.'
import { connect } from 'react-redux'
import { updateNewMessageBody, sendMessage } from '../../redux/reducers'
import { withAuthRedirect } from '../../utils/withAuthRedirect'

const AuthRedirectComponent = withAuthRedirect(Messages)

const mapStateToProps = state => {
  return {
    newMessageBody: state.dialogsReducer.newMessageBody,
    dialogs: state.dialogsReducer.dialogsData,
    messages: state.dialogsReducer.messages
  }
}

export const MessagesContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  sendMessage
})(AuthRedirectComponent)
