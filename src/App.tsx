import { useState } from 'react'
import './App.css'
import { IconButton } from './components/IconButton'
import { Input } from './components/Input'
import { Note } from './components/Note'
import { Form } from './components/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OptionsButtons } from './components/OptionsButtons'

type NoteItem = {id:string, content: string}
const noteList:NoteItem[] = [{
  id: '01',
  content: 'First note',
}, {
  id:'02',
  content:'Second note'
}]

// const displayOptions = ({}:NoteItem[]):void => {
//  console.log("I'm options")
// }

const renderList = (noteList:NoteItem[]) => {
  const [onDisplayOptions, setOnDisplayOptions] = useState(false)
  return (noteList.map((cur)=>{
    return(
      <>
        <Note
          key={cur.id}
          id={`${cur.id}`}
          onMouseOver={() => setOnDisplayOptions(true)}
          onMouseOut={() => setOnDisplayOptions(false)}
          style={{position:'relative'}}
          >
          {cur.content}
          {onDisplayOptions && <OptionsButtons style={{position:'absolute', top:'-1em', right:'0'}}/>}
        </Note>
      </>
    )
  }))
}

// const displayAddNoteForm = ({}:NoteItem[]):void => {
//   // const [contentCopy, setContentCopy] = useState('content')
  
// }



// const addNote = () => {)vhvhv}

function App() {
  const [displayAddNoteForm, setDisplayAddNoteForm] = useState(false)
  const [inputValue, setInputValue] = useState('')
  // const [contentCopy, setContentCopy] = useState('content')

  return(
    <>
      <h1 style={{textAlign: 'center',fontSize:'5em',marginBottom: '3px',marginTop:'10px'}}>
        <FontAwesomeIcon icon={'thumbtack'} style={{color:'#debe49'}}/> my notes
      </h1>

      {displayAddNoteForm && <Form id={''} content={''} value={inputValue} style={{zIndex:'1'}} children={<>
          <Input id={''} placeholder='write your note' onChange={(e) => setInputValue((e.target.value))} 
          style={{maxWidth:'50%', maxHeight:'70%', margin:'1em'}}/>
          <IconButton title={"save note"} icon={"check"} onClick={() => { } } style={{zoom: '120%',margin:'.5em',  background:'#debe49', color:'black' }}/>
          <IconButton title={"cancel"} icon={"x"} onClick={() => { } } style={{zoom:'120%',margin:'.5em',  background:'#debe49', color:'black' }}/>
        </>}></Form>}
     
      <div style={{ maxWidth: '800px', margin: 'auto' }} >
        <Input id='ws' placeholder='Search' value={inputValue} onChange={(e) => setInputValue((e.target.value))} style={{ width:'100%' }}/>

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