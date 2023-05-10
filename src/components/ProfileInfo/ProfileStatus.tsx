import React from 'react'
import { useState } from 'react'

type TPropsStatus = {
  status: string
}

export const ProfileStatus = (props: TPropsStatus) => {
  const [editMode, setEditMode] = useState(false)

  const activateEditMode = () => setEditMode(true)
  const deactivateEditMode = () => setEditMode(false)

  return (
    <>
      {!editMode && (
        <div>
          <span onDoubleClick={() => activateEditMode()}>{props.status}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input autoFocus={true} onBlur={() => deactivateEditMode()} value={props.status} />
        </div>
      )}
    </>
  )
}
