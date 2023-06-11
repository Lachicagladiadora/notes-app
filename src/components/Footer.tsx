import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
  return (<footer
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap:"10px",
      background: '#141414',
      alignItems: 'center',
      padding: '20px',
    }}
  >
    <a
      href="https://github.com/Lachicagladiadora"
      target="_blank"
    >
      <FontAwesomeIcon icon={["fab", "github"]} />
    </a>

    <p>2023 - by Lachicagladiadora</p>
  </footer>)
}