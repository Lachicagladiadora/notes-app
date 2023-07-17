import { CSSProperties, useState } from "react"
import { NoteOptions } from "./NoteOptions"
import { AddNoteForm } from "./AddNoteForm"
import { Notification } from "./Notification"

import { DESIGN_SYSTEM } from "../constants"

type NoteProps = {
  id: string,
  children: string,
  favorite: boolean, 
  onEdit: (id: string, content: string) => void,
  onDelete: (id: string) => void,
  // onCopy?: (content: string) => void,
  onFavorite: (id: string) => void,
  style?: CSSProperties
}

export const Note = ({ id, children, favorite, onEdit, onDelete, onFavorite, style }: NoteProps) => {

  const [displayOptions, setDisplayOptions] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [isCopy, setIsCopy] = useState(false)

  const onEditNote = (cc: string) => {
    onEdit(id, cc)
    setIsEdit(false)
  }

  const onCopyNote = (children: string) => {
    navigator.clipboard.writeText(children)
  }

  if (isEdit) return (
    <AddNoteForm initialValue={children} onSubmit={onEditNote} onCancel={() => setIsEdit(false)} style={{ marginBottom: "20px", background: 'green' }} />
  )
  if (isDelete) return (
    <Notification yesDelete={() => { onDelete(id) }} noDelete={() => setIsDelete(false)}>
      {'Do you delete note?'}
    </Notification>
  )
  if (isCopy) {
    setIsCopy(false)
    onCopyNote(children)
  }

  return (
    <div onMouseOver={() => setDisplayOptions(true)} onMouseOut={() => setDisplayOptions(false)}  style={{ position: "relative" }}>
      <p
        style={{
          background: DESIGN_SYSTEM.gray,
          borderRadius: '16px',
          padding: '10px 20px',
          color: DESIGN_SYSTEM.main,
          fontFamily: DESIGN_SYSTEM.fontFamily,
          letterSpacing:'0px',
          lineHeight:'35px',
          ...style
        }}
      >
        {children}
      </p>
      {displayOptions && (
        <NoteOptions
          onDisplayEdit={() => setIsEdit(true)}
          onDisplayDelete={() => setIsDelete(true)}
          onCopy={() => setIsCopy(true)}
          onFavorite={() => onFavorite(id)}
          styleFavorite={{
            background: DESIGN_SYSTEM.black,
            color: favorite ? DESIGN_SYSTEM.main : DESIGN_SYSTEM.white,
            border: 'none',
            margin: '0px 3px 0px 3px'
          }}
          style={{
            position: "absolute",
            top: "-10px",
            right: "10px"
          }}
        />
      )}
    </div>
  )

}

