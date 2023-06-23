import { CSSProperties, useState } from "react"
import { NoteOptions } from "./NoteOptions"
import { AddNoteForm } from "./AddNoteForm"
import { Notification } from "./Notification"
// import { IconButton } from "./IconButton"

type NoteProps = {
  id: string,
  children: string,
  onEdit: (id: string, content: string) => void,
  onDelete: (id: string) => void,
  onCopy?: (content: string) => void,
  style?: CSSProperties
}

export const Note = ({ id, children, onEdit, onDelete, style }: NoteProps) => {

  const [displayOptions, setDisplayOptions] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [isCopy, setIsCopy] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const onEditNote = (cc: string) => {
    onEdit(id, cc)
    setIsEdit(false)
  }

  const onCopyNote = (_content: string) => {
    navigator.clipboard.writeText(children)
  }

  // const onFavoriteNote=()=>{

  // }

  if (isEdit) return (
    <AddNoteForm initialValue={children} onSubmit={onEditNote} onCancel={()=>setIsEdit(false)} style={{ marginBottom: "20px", background: 'green' }} />

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
  if (isFavorite) return (
    // <IconButton title="favorite" icon={'heart'} size="sm" onClick={() => isFavorite} style={{ background: 'black', color: '#debe49', border: 'none', margin: '0px 3px 0px 3px' }} />
    console.log('add favorite')
  )

  return (
    <div onMouseOver={() => setDisplayOptions(true)} onMouseOut={() => setDisplayOptions(false)} style={{ position: "relative" }}>
      <p
        style={{
          background: '#123',
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
          onFavorite={() => setIsFavorite((prev) => !prev)}
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