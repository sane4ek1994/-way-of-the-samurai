import React from 'react'
import { useState } from 'react'

export const ProfileStatus = (props: any) => {
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
