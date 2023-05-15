import { DialogItem, TDialogItem } from './DialogItem'
import { MessageItem, TMessageItem } from './MessageItem'

import styles from './messages.module.css'
import { AddMessageForm } from './MessageForm'

type TNewMessageBody = {
  newMessageBody: string
}

export const Messages = (props: any) => {
  const addNewMessageBody = (values: TNewMessageBody) => {
    props.sendMessage(values.newMessageBody)
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
        <AddMessageForm addNewMessageBody={addNewMessageBody} />
      </div>
    </div>
  )
}
