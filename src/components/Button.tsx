import { CSSProperties, ReactNode } from "react"

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
        background: '#141414',
        color:'#debe49',
        border: 'solid 1px #debe49',
        ...style
      }}
    >
      {children}
    </button>
  )
}