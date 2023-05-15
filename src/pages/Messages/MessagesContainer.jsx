import { Messages } from '.'
import { connect } from 'react-redux'
import { sendMessage } from '../../redux/reducers'
import { withAuthRedirect } from '../../utils/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = state => {
  return {
    newMessageBody: state.dialogsReducer.newMessageBody,
    dialogs: state.dialogsReducer.dialogsData,
    messages: state.dialogsReducer.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: newMessageBody => {
      dispatch(sendMessage(newMessageBody))
    }
  }
}

export const MessagesContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages)
