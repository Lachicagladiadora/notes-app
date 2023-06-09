import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CSSProperties } from "react"

type IconButtonProps = {
  id: string,
  title: string,
  icon: IconProp,
  onClick: () => void,
  style?: CSSProperties
}

export const IconButton = ({id, title, icon, onClick, style}:IconButtonProps) => {
  return (
    <button 
      id={id} 
      title={title} 
      onClick={onClick} 
      style={{ 
        width: '21px', 
        height:'21px', 
        borderRadius: '50%', 
        borderStyle:'none',
        color:'#debe49',
        background: '#141414',
        border:'solid 1px #debe49',
        ...style
      }}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  )
}
