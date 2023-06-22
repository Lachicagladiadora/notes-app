import { CSSProperties } from "react"
import { IconButton } from "./IconButton"

type NoteOptionsProps = {
  onDisplayEdit:()=>void,
  onDisplayDelete: ()=>void,
  onCopy:()=>void,
  onFavorite:()=>void,
  style?: CSSProperties
}

export const NoteOptions = ({ onDisplayEdit,onDisplayDelete,onCopy,onFavorite,style }: NoteOptionsProps) => {
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
      <IconButton title="edit" icon={'pen'} size="sm" onClick={onDisplayEdit} style={IconButtonStyles} />
      <IconButton title="delete" icon={'trash'} size="sm" onClick={onDisplayDelete} style={IconButtonStyles} />
      <IconButton title="copy" icon={'copy'} size="sm" onClick={onCopy} style={IconButtonStyles} />
      <IconButton className='favorite' title="favorite" icon={'heart'} size="sm" onClick={onFavorite} style={IconButtonStyles} />
    </div>
  )
}

const IconButtonStyles: CSSProperties = { background: 'black', color: '#e6e6e6', border: 'none', margin: '0px 3px 0px 3px' }
// const IconButtonFavoriteStyles: CSSProperties = { background: 'black', color: '#debe49', border: 'none', margin: '0px 3px 0px 3px' }