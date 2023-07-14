import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DESIGN_SYSTEM } from "../constants"

export const Header = () => {
  return (
    <header style={{ border: 'solid 2px royalBlue', backgroundColor: DESIGN_SYSTEM.black }}>
        <div style={{ maxWidth: '800px', margin: 'auto' }}>
          <h1 style={{ textAlign: 'center', fontSize: '5em', marginBottom: '3px', marginTop: '10px' }}>
            <FontAwesomeIcon icon={'thumbtack'} style={{ color: '#debe49' }} /> My Notes
          </h1>
        </div>
      </header>
  )
}
