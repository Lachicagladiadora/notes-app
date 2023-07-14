import { CSSProperties, ReactNode } from "react"

type FormProps = {
  id: string,
  content: string,
  onSubmit?: ()=>{},
  children: ReactNode
  style?:CSSProperties
}

export const Form = ({id, content, onSubmit, children, style}:FormProps) => {
  return(
    <form
      id={id}
      content={content}
      onSubmit={onSubmit}
      style={{
        background: 'rgba(0, 0, 0, 0.73)',
        width: '100%',
        height: '100%',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position:'fixed',
        bottom: '0',
        right: '0',
        ...style
      }}
    >
      
      {children}
    </form>
  )
}