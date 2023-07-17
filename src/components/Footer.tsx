import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DESIGN_SYSTEM } from "../constants"

export const Footer = () => {
  return (<footer
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: "10px",
      background: DESIGN_SYSTEM.black,
      alignItems: 'center',
      padding: '20px',
      justifyContent:'flex-end',
      color: DESIGN_SYSTEM.main,
      fontSize: '12px',
      fontFamily:DESIGN_SYSTEM.fontFamily
    }}
  >
    <a href="https://github.com/Lachicagladiadora" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={["fab", "github"]} 
        style={{
          color:DESIGN_SYSTEM.main,
          height: '30px', 
        }}
      />
    </a>

    <p>2023 - by Lachicagladiadora</p>
  </footer>)
}