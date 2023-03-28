import { Key } from 'react'

export type TMessageItem = {
  id: Key | string
  message: string
  dispatch: (obj: Object) => void
}

export const MessageItem = (props: TMessageItem) => {
  return (
    <>
      <div className='message'>{props.message}</div>
    </>
  )
}
