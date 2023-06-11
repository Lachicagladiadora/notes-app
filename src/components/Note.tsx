import { CSSProperties, useState } from "react"
import { NoteOptions } from "./NoteOptions"
import { AddNoteForm } from "./AddNoteForm"

type NoteProps = {
  id:string,
  children: string,
  onEdit:(id:string,content:string)=>void,
  style?: CSSProperties
}

export const Note = ({ id,children,onEdit, style }: NoteProps) => {

  const [displayOptions, setDisplayOptions] = useState(false)
  const [isEdit,setIsEdit]=useState(false)

  const onEditNode = (cc:string)=>{
    onEdit(id,cc)
    setIsEdit(false)
  }

  if(isEdit)return(
    <AddNoteForm initialValue={children} onSubmit={onEditNode} style={{ marginBottom: "20px" }} />
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
      {displayOptions && <NoteOptions onDisplayEdit={()=>setIsEdit(true)} style={{ position: "absolute", top: "-10px", right: "10px" }} />}
    </div>
  )
}