import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CSSProperties } from "react"

type IconButtonSize = "sm" | "md" | "lg"

type IconButtonProps = {
  title: string,
  icon: IconProp,
  onClick: () => void,
  size?: IconButtonSize,
  type?:"button" | "submit" | "reset",
  id?: string,
  style?: CSSProperties
}

export const IconButton = ({ id, title, icon, onClick,size="md",type="button", style }: IconButtonProps) => {
  return (
    <button
      id={id}
      title={title}
      onClick={onClick}
      type={type}
      style={{
        width:SIZE[size].size,
        height:SIZE[size].size,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: '50%',
        borderStyle: 'none',
        color: '#debe49',
        background: '#141414',
        border: 'solid 1px #debe49',
        fontSize:SIZE[size].icon,
        cursor:"pointer",
        ...style
      }}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  )
}

const SIZE: { [key in IconButtonSize]: {size:string,icon:string} } = {
  sm: {size:"20px",icon:"10px"},
  md: {size:"28px",icon:"16px"},
  lg: {size:"36px",icon:"26px"},
}