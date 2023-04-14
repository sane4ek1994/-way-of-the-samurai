import { useRef } from 'react'

import { DialogItem, TDialogItem } from './DialogItem'
import { MessageItem, TMessageItem } from './MessageItem'

import styles from './messages.module.css'

// interface IMessages {
//   dialogs: TDialogItem[]
//   messages: TMessageItem[]
//   store: any
//   dispatch: (obj: Object) => void
// }

export const Messages = (props: any) => {
  let newMessage = useRef<HTMLTextAreaElement>(null)

  const updateNewMessageBody = () => {
    let message = newMessage.current?.value || ''
    props.updateNewMessageBody(message)
  }

  const onSendMessageClick = () => {
    props.sendMessage()
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
          <MessageItem key={message.id} message={message.message} id={''} />
        ))}
        <textarea
          ref={newMessage}
          value={props.newMessageBody}
          onChange={updateNewMessageBody}
          placeholder='Write a message...'
        />
        <button onClick={onSendMessageClick}>Post message</button>
      </div>
    </div>
  )
}
