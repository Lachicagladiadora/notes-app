import { CSSProperties, ReactFragment } from "react"

type FormProps = {
  id: string,
  content: string,
  onChange?: ()=>{},
  children: JSX.Element | ReactFragment,
  style?:CSSProperties
}

export const Form = ({id, content, onChange: onChange, children, style}:FormProps) => {
  return(
    <form
      id={id}
      content={content}
      
      style={{
        margin: '4em 2.5em 2em 4em',
        background: 'black',
        border:'solid 2px #debe49',
        width: '80%',
        height: '75%',
        borderRadius: '15px',
        padding: '2em',
        display:'flex',
        justifyContent: 'center',
        position:'fixed',
        bottom: '4rem',
        right: '4rem',
        ...style
      }}
    >
      <textarea name="write" id={id}  placeholder='write your note' value={''} onChange={onChange} 
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
      />
      {children}
    </form>
  )
}