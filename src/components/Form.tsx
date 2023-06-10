import { CSSProperties, ReactFragment } from "react"

type FormProps = {
  id: string,
  content: string,
  onChange?: ()=>{},
  children: JSX.Element | ReactFragment,
  style?:CSSProperties
}

export const Form = ({id, content, onChange, children, style}:FormProps) => {
  return(
    <form
      id={id}
      content={content}
      
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
      {/* <textarea name="write" id={id}  placeholder='write your note' value={''} onChange={onChange} 
        style={{
          borderRadius: '15px', 
          borderStyle: 'none', 
          padding: '1.5em 1.5em', 
          marginTop:'4em',
          marginRight: '-25px',
          border:'solid 1px #debe49',
          background: '#141414',
          color:'#e6e6e6',
          fontWeight: 'bold',
          marginBottom: '2em'}}
      /> */}
      {children}
    </form>
  )
}