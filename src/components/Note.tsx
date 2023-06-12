import { CSSProperties, useState } from "react"
import { NoteOptions } from "./NoteOptions"
import { AddNoteForm } from "./AddNoteForm"
import { Notification } from "./Notification"

type NoteProps = {
  id:string,
  children: string,
  onEdit:(id:string,content:string)=>void,
  onDelete:(id:string)=>void,
  style?: CSSProperties
}

export const Note = ({ id,children,onEdit,onDelete, style }: NoteProps) => {

  const [displayOptions, setDisplayOptions] = useState(false)
  const [isEdit,setIsEdit]=useState(false)
  const [isDelete,setIsDelete]=useState(false)

  const onEditNode = (cc:string)=>{
    onEdit(id,cc)
    setIsEdit(false)
  }

  if(isEdit)return(
    <AddNoteForm initialValue={children} onSubmit={onEditNode} style={{ marginBottom: "20px" }} />
  )
  if(isDelete) {
    return(
      <Notification yesDelete={()=>{onDelete(id)}} noDelete={()=>setIsDelete(false)}>
        {'Do you delete note?'}
      </Notification>
    )
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
      {displayOptions && <NoteOptions onDisplayEdit={()=>setIsEdit(true)} onDisplayDelete={()=>setIsDelete(true)} style={{ position: "absolute", top: "-10px", right: "10px" }} />}
    </div>
  )

}