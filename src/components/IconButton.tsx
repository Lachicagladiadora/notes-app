import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CSSProperties } from "react"

type IconButtonProps = {
  id: string,
  icon: IconProp,
  onClick: () => void,
  style?: CSSProperties
}

export const IconButton = ({id, icon, onClick, style}:IconButtonProps) => {
  return (
    <button id={id} title="fgh" onClick={onClick} style={{padding: '6px', borderRadius: '50%', borderStyle:'none',...style}}>
      <FontAwesomeIcon icon={icon} />
    </button>
  )
}
