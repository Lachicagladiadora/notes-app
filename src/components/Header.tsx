import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DESIGN_SYSTEM } from "../constants"

export const Header = () => {
  return (
    <header style={{backgroundColor: DESIGN_SYSTEM.black }}>
        <div style={{ maxWidth: '800px', margin: 'auto' }}>
          <h1 style={{ textAlign: 'center', fontSize: '5em', marginBottom: '3px', marginTop: '10px', color: DESIGN_SYSTEM.main }}>
            <FontAwesomeIcon icon={'thumbtack'} style={{ color: DESIGN_SYSTEM.main, fontFamily:DESIGN_SYSTEM.fontFamily}} /> My Notes
          </h1>
        </div>
      </header>
  )
}
