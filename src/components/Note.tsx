import { CSSProperties } from "react"

type NoteProps = {
  id: string, 
  children: string,
  onMouseMove: () => void,
  style?: CSSProperties
}

export const Note =({id, children, onMouseMove, style}:NoteProps) => {
  return(
    <div id="options">
      <p 
        id={id}
        onMouseMove={onMouseMove}
        style={{
          border:'solid 2px #424242',
          background:'#1c1c1c',
          borderRadius: '15px',
          padding: '1em',
          margin: '.5em 0',
          ...style
        }}
        >
        {children}
      </p>
    </div>
  )
}