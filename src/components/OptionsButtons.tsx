import { CSSProperties } from "react"
import { IconButton } from "./IconButton"

type OptionsButtonsProps = {
  style?: CSSProperties
}

export const OptionsButtons = ({ style}:OptionsButtonsProps) => {
  return(
    <div 
      className="contain-options"
      style={{
        background: 'black',
        borderRadius: '15px',
        padding: '2px 4px',
        ...style
      }}
    >
      <IconButton title="copy" icon={'copy'} onClick={()=>{}} style={{background:'black', color:'#e6e6e6', border:'none', margin:'0px 3px 0px 3px'}}/>
      <IconButton title="edit" icon={'pen'} onClick={()=>{}} style={{background:'black', color:'#e6e6e6', border:'none', margin:'0px 3px 0px 3px'}}/>
      <IconButton title="delete" icon={'trash'} onClick={()=>{}} style={{background:'black', color:'#e6e6e6', border:'none', margin:'0px 3px 0px 3px'}}/>
    </div>
  )
}