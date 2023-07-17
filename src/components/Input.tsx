import { CSSProperties } from "react";
import { DESIGN_SYSTEM } from "../constants";

type InputProps = {
  value: string,
  setValue: (newValue: string) => void
  type?:"text" | "search",
  id?: string,
  placeholder?: string,
  style?: CSSProperties,
}

export const Input = ({ id, type="text", placeholder, value, setValue, style }: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => setValue(e.target.value)}
      style={{
        width: '100%',
        borderRadius: '35px 0 0 35px',
        borderStyle: 'none',
        padding: '10px 20px',
        border: 'solid 1px DESIGN_SYSTEM.main',
        background: DESIGN_SYSTEM.gray,
        color: DESIGN_SYSTEM.white,
        fontWeight: '700',
        ...style
      }}
    />
  )
}