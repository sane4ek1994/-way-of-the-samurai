import { useState } from 'react'

type TPropsStatus = {
  status: string
  updateUserStatus: (string: string) => void
}

export const ProfileStatus = (props: TPropsStatus) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  const activateEditMode = () => setEditMode(true)

  const deactivateEditMode = (): void => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const onStatusChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setStatus(event.target.value)
  }

  return (
    <>
      {!editMode && (
        <div>
          <span onDoubleClick={() => activateEditMode()}>{status || '------'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            type='text'
            autoFocus={true}
            onBlur={() => deactivateEditMode()}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </>
  )
}
