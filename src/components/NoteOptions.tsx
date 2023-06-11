import { CSSProperties } from "react"
import { IconButton } from "./IconButton"

type NoteOptionsProps = {
  onDisplayEdit:()=>void,
  style?: CSSProperties
}

export const NoteOptions = ({ onDisplayEdit,style }: NoteOptionsProps) => {
  return (
    <div
      style={{
        display:"flex",
        background: 'black',
        borderRadius: '15px',
        padding: '4px 6px',
        ...style
      }}
    >
      <IconButton title="copy" icon={'copy'} size="sm" onClick={() => { console.log('copy') }} style={IconButtonStyles} />
      <IconButton title="edit" icon={'pen'} size="sm" onClick={onDisplayEdit} style={IconButtonStyles} />
      <IconButton title="delete" icon={'trash'} size="sm" onClick={() => { console.log('trash') }} style={IconButtonStyles} />
    </div>
  )
}

const IconButtonStyles: CSSProperties = { background: 'black', color: '#e6e6e6', border: 'none', margin: '0px 3px 0px 3px' }