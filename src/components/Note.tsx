import { CSSProperties, useState } from "react"
import { NoteOptions } from "./NoteOptions"
import { AddNoteForm } from "./AddNoteForm"
import { Notification } from "./Notification"

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
          background: '#141414',
          borderRadius: '16px',
          padding: '10px 20px',
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
            background: 'black',
            color: favorite ? '#debe49' : '#e6e6e6',
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

