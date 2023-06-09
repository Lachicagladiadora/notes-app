import { useState } from 'react'
import './App.css'
import { IconButton } from './components/IconButton'
import { Input } from './components/Input'
import { Note } from './components/Note'
import { Form } from './components/Form'

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
  return (noteList.map((cur)=>{
    return(
      <Note 
        key={cur.id}
        id={`${cur.id}`}
        onMouseMove={() => console.log('note')}     
      >
        {cur.content}
      </Note>
    )
  }))
}

const displayAddNoteForm = () => {
  const [contentCopy, setContentCopy] = useState('content')
  return(
    <Form id={''} content={''}  onChange={()=>console.log('hi')}>
      {<>
        <Input id={""} placeholder='write your note' value={contentCopy} onChange={(e)=>setContentCopy(e.target.value)}/>
        <IconButton id={""} title={"save note"} icon={"check"} onClick={()=>{}}/>
        <IconButton id={""} title={"cancel"} icon={"x"} onClick={()=>{}}/> 
      </>}
    </Form>
  )
}



// const addNote = () => {)vhvhv}

function App() {
  const [displayAddNoteForm, setDisplayAddNoteForm] = useState(false)
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
      {displayAddNoteForm && <Form></Form>}
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

        {displayAddNoteForm}

        <IconButton
          id='add-note-button'
          title='add note'
          icon={'plus'}
          onClick={()=> setDisplayAddNoteForm((prev) => !prev)}
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