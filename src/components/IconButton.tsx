import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CSSProperties } from "react"
 import { DESIGN_SYSTEM } from "../constants"

type IconButtonSize = "sm" | "md" | "lg"

type IconButtonProps = {
  title: string,
  icon: IconProp,
  onClick: () => void,
  size?: IconButtonSize,
  className?:string,
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
        color: DESIGN_SYSTEM.main,
        background: DESIGN_SYSTEM.black,
        border: 'solid 1px DESIGN_SYSTEM.main',
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

// sm: {size:"30px",icon:"10px"},
// md: {size:"48px",icon:"10px"},
// lg: {size:"56px",icon:"16px"},