import './App.css'
import { IconButton } from './components/IconButton'
import { Input } from './components/Input'
import { Note } from './components/Note'

type NoteItem = {id:string, content: string}
const noteList:NoteItem[] = [{
  id: '01',
  content: 'sadsfdg',
}, {
  id:'02',
  content:'sdfgfhngmb'
}
]

const renderList = (noteList:NoteItem[]) => {
  return (noteList.map((curr)=>{
    return(
      <Note 
        key={curr.id}
        id={`${curr.id}`}
        onMouseMove={() => console.log('note')}     
      >
        {curr.content}
      </Note>
    )
  }))
}


// const addNote = () => {)vhvhv}

function App() {
  return(
    <>
      <h1
        style={{
          textAlign: 'center',
          fontSize:'4em',
          marginBottom: '3px',
        }}
      >
        my notes
      </h1>
      
      <div
        style={{
          maxWidth: '800px',
          margin: 'auto'
        }}
      >
        <Input 
          id='ws' 
          placeholder='Search'
          style={{
            width:'100%',
          }}
        />

        <IconButton 
          id='search-button' 
          title='search' 
          icon={'search'} 
          onClick={()=> console.log("I'm a icon button")}
          style={{
            background: '#debe49',
            color: '#141414'
          }}
        />

        {renderList(noteList)}

        <IconButton
          id='add-note-button'
          title='add note'
          icon={'plus'}
          onClick={()=> console.log("I'm add note")}
          style={{
            background:'#debe49',
            color: '#141414',
            zoom: '180%',
            fontWeight:'lighter',
            position: 'fixed',
            bottom: '1.5em',
            right: '1.5em',
            
          }}
        />

      </div>
      <footer
        style={{
          display: 'flex',
          flexDirection: 'column',
          background:'#141414',
          alignItems: 'center',
          padding: '2em 0 3em 0',
          marginTop: '2em',
        }}
      >
        <a 
          href="https://github.com/Lachicagladiadora" 
          target="_blank"
        >
          <img 
            src=".././public/github.svg" 
            alt="github" 
            style={{
              height:'30px',
              margin:'1em 0',
              color: '#debe49',
            }}
          />
        </a>
        
        <p>2023 - by Lachicagladiadora</p>
      </footer>

    </>
  )
}

export default App