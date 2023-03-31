import { Key } from 'react'

export type TMessageItem = {
  id: Key | string
  message: string
}

export const MessageItem = (props: TMessageItem) => {
  return (
    <>
      <div className='message'>{props.message}</div>
    </>
  )
}
