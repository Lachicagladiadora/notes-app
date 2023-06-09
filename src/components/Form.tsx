import { CSSProperties } from "react"

type FormProps = {
  id: string,
  content: string,
  onChange: ()=>{},
  children: JSX.Element,
  style?:CSSProperties
}

export const Form = ({id, content, onChange: onChange, children, style}:FormProps) => {
  return(
    <form
      id={id}
      content={content}
      onChange={onChange}
      style={{
        margin: '2em',
        ...style
      }}
    >
      {children}
    </form>
  )
}