import { CSSProperties } from "react"

type NoteProps = {
  id: string, 
  children: string | JSX.Element,
  onMouseOver: () => void,
  onMouseOut: () => void,
  style?: CSSProperties
}

export const Note =({id, children, onMouseOver: onMouseOver, onMouseOut: onMouseOut, style}:NoteProps) => {
  return(
    <div id="options">
      <p 
        id={id}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        style={{
          border:'solid 2px #424242',
          background:'#1c1c1c',
          borderRadius: '15px',
          padding: '1em',
          margin: '1.5em 0',
          ...style
        }}
        >
        {children}
      </p>
    </div>
  )
}