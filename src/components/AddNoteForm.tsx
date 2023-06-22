import { CSSProperties, useState } from 'react'
import { IconButton } from './IconButton'
import { Input } from './Input'

type AddNoteFormProps = {
  onSubmit: (newContent: string) => void,
  initialValue?: string,
  onClick?: ()=>void,
  style?: CSSProperties
}

export const AddNoteForm = ({ onSubmit, initialValue = '', onClick, style }: AddNoteFormProps) => {
  const [value, setValue] = useState(initialValue)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(value)
        setValue('')
      }}
      
      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", background: 'red', ...style }}
    >
      <Input type='text' placeholder='write your note' value={value} setValue={setValue} />
      <IconButton type='submit' title={"save note"} icon={"check"} onClick={() => { console.log('save')}} style={{ background: '#debe49', color: 'black' }} />
      <IconButton type='button' title={"cancel"} icon={"x"} onClick={onClick} style={{ background: '#debe49', color: 'black' }} />
    </form>
  )
}
