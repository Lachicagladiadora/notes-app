import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
  return (<footer
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: "10px",
      background: '#141414',
      alignItems: 'center',
      padding: '20px',
    }}
  >
    <a href="https://github.com/Lachicagladiadora" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={["fab", "github"]} 
        style={{
          color:'#debe49',
          height: '30px'
        }}
      />
    </a>

    <p>2023 - by Lachicagladiadora</p>
  </footer>)
}