import { CSSProperties, ChangeEvent, useState } from 'react'
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
      <Input placeholder='write your note' value={value} setValue={setValue} onChange={(e:ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)} />
      <IconButton title={"save note"} icon={"check"} type='submit' onClick={() => { console.log('save')}} style={{ background: '#debe49', color: 'black' }} />
      <IconButton title={"cancel"} icon={"x"} onClick={() => {console.log('cancel')}} style={{ background: '#debe49', color: 'black' }} />
    </form>
  )
}
