import { useRef } from 'react'

import { DialogItem, TDialogItem } from './DialogItem'
import { MessageItem, TMessageItem } from './MessageItem'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/reducers'

import styles from './messages.module.css'

interface IMessages {
  dialogs: TDialogItem[]
  messages: TMessageItem[]
  store: any
  dispatch: (obj: Object) => void
}

export const Messages = (props: IMessages) => {
  let newMessage = useRef<HTMLTextAreaElement>(null)
  const newMessageBody = props.store.getState().dialogsReducer.newMessageBody

  const updateNewMessageBody = () => {
    let message = newMessage.current?.value
    props.dispatch(updateNewMessageBodyCreator(message))
  }

  const onSendMessageClick = () => {
    props.dispatch(sendMessageCreator())
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__item}>
        {props.dialogs.map((dialog: TDialogItem) => (
          <DialogItem key={dialog.id} id={dialog.id} src={dialog.src} name={dialog.name} />
        ))}
      </div>
      <div className={styles.messages__item}>
        {props.messages.map((message: TMessageItem) => (
          <MessageItem dispatch={props.dispatch} key={message.id} message={message.message} id={''} />
        ))}
        <textarea
          ref={newMessage}
          value={newMessageBody}
          onChange={updateNewMessageBody}
          placeholder='Write a message...'
        />
        <button onClick={onSendMessageClick}>Post message</button>
      </div>
    </div>
  )
}
