import { CSSProperties } from "react";

type InputProps = {
  value: string,
  setValue: (newValue: string) => void
  id?: string,
  placeholder?: string,
  style?: CSSProperties,
}

export const Input = ({ id, placeholder, value, setValue, style }: InputProps) => {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={e => setValue(e.target.value)}
      style={{
        width: '100%',
        borderRadius: '35px',
        borderStyle: 'none',
        padding: '10px 20px',
        border: 'solid 1px #debe49',
        background: '#141414',
        color: '#e6e6e6',
        fontWeight: '700',
        ...style
      }}
    />
  )
}