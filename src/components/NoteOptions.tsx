import { CSSProperties } from "react"
import { IconButton } from "./IconButton"
import { DESIGN_SYSTEM } from "../constants"

type NoteOptionsProps = {
  onDisplayEdit:()=>void,
  onDisplayDelete: ()=>void,
  onCopy:()=>void,
  onFavorite:()=>void,
  styleFavorite?: CSSProperties
  style?: CSSProperties
}

export const NoteOptions = ({ onDisplayEdit,onDisplayDelete,onCopy,onFavorite,styleFavorite,style }: NoteOptionsProps) => {

  return (
    <div
      style={{
        display:"flex",
        background: DESIGN_SYSTEM.black,
        borderRadius: '15px',
        padding: '4px 6px',
        ...style
      }}
    >
      <IconButton title="edit" icon={'pen'} size="sm" onClick={onDisplayEdit} style={IconButtonStyles} />
      <IconButton title="delete" icon={'trash'} size="sm" onClick={onDisplayDelete} style={IconButtonStyles} />
      <IconButton title="copy" icon={'copy'} size="sm" onClick={onCopy} style={IconButtonStyles} />
      <IconButton className='favorite' title="favorite" icon={'heart'} size="sm" onClick={onFavorite} style={{...styleFavorite}} />
    </div>
  )
}

const IconButtonStyles: CSSProperties = { background: DESIGN_SYSTEM.black, color: DESIGN_SYSTEM.white, border: 'none', margin: '0px 3px 0px 3px' }