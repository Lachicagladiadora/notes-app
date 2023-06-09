import { CSSProperties} from "react";

type InputProps = {
  id: string,
  placeholder?: string,
  value?: string,
  onChange?: ()=>{}
  style?: CSSProperties,
}

export const Input = ({id, placeholder, value, onChange, style}:InputProps) => {
  return(
    <input 
      id={id} 
      type="text" 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange}
      style={{
        borderRadius: '35px', 
        borderStyle: 'none', 
        padding: '.5em 1em', 
        marginRight: '-25px',
        border:'solid 1px #debe49',
        background: '#141414',
        color:'#e6e6e6',
        fontWeight: 'bold',
        marginBottom: '2em',
        ...style
      }}
    />
  )
}