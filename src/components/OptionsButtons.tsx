import { CSSProperties } from "react"

type OptionsButtonsProps = {
  children: JSX.Element,
  style?: CSSProperties
}

export const OptionsButtons = ({children, style}:OptionsButtonsProps) => {
  return(
    <div 
      className="contain-options"
      style={{
        background: '#141414',
        borderRadius: '8px',
        ...style
      }}
    >
     {children}
    </div>
  )
}