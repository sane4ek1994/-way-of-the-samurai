import { Messages } from '.'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/reducers'

export const MessagesContainer = (props: any) => {
  const newMessageBody = props.store.getState().dialogsReducer.newMessageBody
  const dialogsList = props.store.getState().dialogsReducer.dialogsData
  const messages = props.store.getState().dialogsReducer.messages

  const updateNewMessageBody = (message: string) => {
    props.store.dispatch(updateNewMessageBodyCreator(message))
  }

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  return (
    <Messages
      newMessageBody={newMessageBody}
      onSendMessageClick={onSendMessageClick}
      updateNewMessageBody={updateNewMessageBody}
      messages={messages}
      dialogs={dialogsList}
    />
  )
}
