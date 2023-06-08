import './App.css'
import { Button } from './components/Button'
import { IconButton } from './components/IconButton'

function App() {
  return(
    <>
      <Button id='88' onClick={() => console.log('clic')} style={{border: 'solid 2px royalblue', }}>
        gggg
      </Button>

      <IconButton id='7' icon={'coffee'} onClick={()=> console.log('fcgvhbjn')}></IconButton>
    </>
  )
}

export default App