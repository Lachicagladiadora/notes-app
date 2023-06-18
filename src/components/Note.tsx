import { CSSProperties, useState } from "react"
import { NoteOptions } from "./NoteOptions"
import { AddNoteForm } from "./AddNoteForm"
import { Notification } from "./Notification"

type NoteProps = {
  id:string,
  children: string,
  onEdit:(id:string,content:string)=>void,
  onDelete:(id:string)=>void,
  onCopy?:(content:string)=>void,
  style?: CSSProperties
}

export const Note = ({ id,children,onEdit,onDelete, style }: NoteProps) => {

  const [displayOptions, setDisplayOptions] = useState(false)
  const [isEdit,setIsEdit]=useState(false)
  const [isDelete,setIsDelete]=useState(false)
  const [isCopy,setIsCopy]=useState(false)

  const onEditNote = (cc:string)=>{
    onEdit(id,cc)
    setIsEdit(false)
    // localStorage.setItem('note', JSON.stringify())
  }

  const onCopyNote=(_content:string)=>{
    navigator.clipboard.writeText(children)
  }

  if(isEdit)return(
    <AddNoteForm initialValue={children} onSubmit={onEditNote} style={{ marginBottom: "20px", background:'green'}} />
    
  )
  if(isDelete) return(
    <Notification yesDelete={()=>{onDelete(id)}} noDelete={()=>setIsDelete(false)}>
      {'Do you delete note?'}
    </Notification>
  )
  if(isCopy) {
    setIsCopy(false)
    onCopyNote(children)
  }

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
      {displayOptions && <NoteOptions onDisplayEdit={()=>setIsEdit(true)} onDisplayDelete={()=>setIsDelete(true)} onCopy={()=>setIsCopy(true)} style={{ position: "absolute", top: "-10px", right: "10px" }} />}
    </div>
  )

}