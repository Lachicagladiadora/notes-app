import { CSSProperties } from "react"
import { Input } from "./Input"
import { IconButton } from "./IconButton"

type NoteFormProps = {
  id: string,
  content?:string,
  onChange: ()=>{},
  children: JSX.Element,
  style: CSSProperties
}

export const NoteForm = ({id, content, onChange, children, style}:NoteFormProps) => {
  return (
    <form
      id={id}
      content={content}
      onChange={onChange}
      style={{
        background: '#141414',
        color: '#e6e6e6',
        border: 'solid 5px red',
        ...style
      }}
    >
      {children}=
      {<>
        <Input id={""} placeholder='write your note' value={contentCopy} onChange={(e) => setContentCopy(e.target.value)} />
        <IconButton id={""} title={"save note"} icon={"check"} onClick={() => { } } />
        <IconButton id={""} title={"cancel"} icon={"x"} onClick={() => { } } />
      </>}
    </form>
  )
}