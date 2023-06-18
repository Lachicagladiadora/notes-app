import { CSSProperties, useState } from 'react'
import { IconButton } from './IconButton'
import { Input } from './Input'

type AddNoteFormProps = {
  onSubmit: (newContent: string) => void,
  initialValue?: string
  style?: CSSProperties
}

export const AddNoteForm = ({ onSubmit, initialValue = '', style }: AddNoteFormProps) => {
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
      <Input placeholder='write your note' value={value} setValue={setValue} />
      <IconButton title={"save note"} icon={"check"} type='submit' onClick={() => { }} style={{ background: '#debe49', color: 'black' }} />
      <IconButton title={"cancel"} icon={"x"} onClick={() => { }} style={{ background: '#debe49', color: 'black' }} />
    </form>
  )
}
