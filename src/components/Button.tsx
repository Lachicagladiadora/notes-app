import { CSSProperties, ReactNode } from "react"
import { DESIGN_SYSTEM } from "../constants"

type ButtonProps = {
  id?: string,
  children: ReactNode,
  onClick: () => void,
  style?: CSSProperties
}


export const Button = ({id, children, onClick, style}:ButtonProps) => {
  return (
    <button 
      id={id} 
      onClick={onClick} 
      style={{
        padding: '6px 8px', 
        borderRadius: '10px', 
        background: DESIGN_SYSTEM.black,
        color: DESIGN_SYSTEM.main,
        border: 'solid 1px DESIGN_SYSTEM.main',
        
        ...style
      }}
    >
      {children}
    </button>
  )
}