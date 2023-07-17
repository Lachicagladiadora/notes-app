import { CSSProperties, useState } from 'react'

import { IconButton } from './IconButton'
import { Input } from './Input'
import { DESIGN_SYSTEM } from "../constants"

type AddNoteFormProps = {
  onSubmit: (newContent: string) => void,
  initialValue?: string,
  onCancel: ()=>void,
  style?: CSSProperties
}

export const AddNoteForm = ({ onSubmit, initialValue = '', onCancel, style }: AddNoteFormProps) => {
  const [value, setValue] = useState(initialValue)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(value)
        setValue('')
      }}
      
      style={{ display: "flex", alignItems: "center", justifyContent: "center", background: 'red', ...style }}
    >
      <Input type='text' placeholder='write your note' value={value} setValue={setValue} 
        style={{
          outline:'none',
          fontFamily: DESIGN_SYSTEM.fontFamily,
          // color:DESIGN_SYSTEM.main,
          // height:'auto'
        }}
      />
      <IconButton type='submit' title={"save note"} icon={"check"} onClick={() => { console.log('save')}} 
        style={{
          background: DESIGN_SYSTEM.gray, 
          color: DESIGN_SYSTEM.white,
          borderRadius: '0px',
          fontSize: '10px', 
          width: '31px', 
          height: '38px', 
        }} 
      />
      <IconButton type='button' title={"cancel"} icon={"times"} onClick={onCancel} 
        style={{ 
          background: DESIGN_SYSTEM.gray, 
          color: DESIGN_SYSTEM.white, 
          borderRadius:'0 35px 35px 0 ',
          fontSize: '10px', 
          width: '31px', 
          height: '38px', 
          // transform: 'rotate(45deg)', 
        }} 
      />
    </form>
  )
}
