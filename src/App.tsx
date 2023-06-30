import { useEffect, useMemo, useState } from 'react'

import { IconButton } from './components/IconButton'
import { Input } from './components/Input'
import { Note } from './components/Note'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { AddNoteForm } from './components/AddNoteForm'

type NoteItem = { id: string, content: string, favorite: false }

const NOTE_LIST: NoteItem[] = []

export const App = () => {
  const [displayAddNoteForm, setDisplayAddNoteForm] = useState(false)
  // const [displayFavoritesNotes, setDisplayFavoritesNotes] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [sortDirection, setSortDirection] = useState(false)
  // const [onSortId, setSortId] = useState(true)
  const [notes, setNotes] = useState(NOTE_LIST)

  const notesProcessed = useMemo(() => {
    const filteredNotes= notes.filter((cur) => cur.content.includes(searchInput))
    const sortedNotes = filteredNotes.sort((a, b) => {
      if (a.content.toLowerCase() < b.content.toLowerCase()) return -1
      if (a.content.toLowerCase() === b.content.toLowerCase()) return 0
      return 1
    })
      if (sortDirection)return sortedNotes
      return sortedNotes.reverse()
  }, [notes, searchInput,sortDirection ])

  // TODO: sort , notesProcessed = useMemo ( filter, sort,[notes] ) //return arreglo ordenado

  const onAddNote = (content: string) => {
    const newNote: NoteItem = { id: String(Math.round(Math.random() * 1000000)), content, favorite: false }
    setNotes(prev => ([...prev, newNote]))
    setDisplayAddNoteForm(false)
  }

  const onCancelAddNote = () => {
    return setDisplayAddNoteForm(false)
  }

  const onEditNote = (id: string, content: string) => {
    setNotes(prev => prev.map(cur => cur.id === id ? ({ ...cur, content }) : cur))
    setDisplayAddNoteForm(false)
  }

  const onDeleteNote = (id: string) => {
    setNotes(prev => prev.filter(cur => cur.id !== id))
  }

  // const onFavoriteNote = useMemo(() => {
  //   setNotes(prev => prev.map(_id => _id.favorite === false ? favorite===true))
  //   setDisplayAddNoteForm(false)
  // },[])

  // const onFavoriteNote = useMemo((id:string,favorite:boolean)=> {
  //   console.log('favorite list')
  //   setNotes(prev => prev.map(cur => cur.id === id ? ({ ...cur, favorite }) : cur))

  //   return notes.filter((cur)=>cur.favorite)

  // },[setDisplayFavoritesNotes])

  // const changeSearcher = useMemo(() => {
  //   return notesProcessed && setSearchInput('')
  // }, [notes])


  useEffect(() => {
    const notesData = localStorage.getItem('NotesList')
    if (notesData) {
      setNotes(JSON.parse(notesData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('NotesList', JSON.stringify(notes))
  }, [notes])

  return (
    <>
      <Header />

      <main style={{ border: 'solid 2px pink' }}>
        <div style={{ maxWidth: '800px', margin: 'auto', border: 'solid 2px royalBlue' }} >
          <div style={{ display: "flex", gap: "10px", alignItems: 'center', marginBottom: "30px" }}>
            <Input type='search' placeholder='Search' value={searchInput} setValue={setSearchInput} />
            <IconButton
              type='button'
              title='search'
              icon={'search'}
              onClick={() => console.log('search')}
              style={{
                background: '#debe49',
                color: '#141414'
              }}
            />
            <IconButton
              type='button'
              title='order'
              icon={'arrow-down'}
              onClick={() => setSortDirection(prev=>!prev)}
              style={{
                background: '#debe49',
                color: '#141414',
                transform:sortDirection?'rotate(0deg)':'rotate(180deg)',
                transition: '.5s'
              }}
            />
          </div>

          {displayAddNoteForm && (<AddNoteForm onSubmit={onAddNote} onCancel={onCancelAddNote} style={{ marginBottom: "20px" }} />)}

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            { notesProcessed.map((cur) => <Note key={cur.id} id={cur.id} onEdit={onEditNote} onDelete={onDeleteNote}>{cur.content}</Note>)}
            
          </div>

          <IconButton
            title='Add Note'
            icon={'plus'}
            size='lg'
            onClick={() => setDisplayAddNoteForm((prev) => !prev)}
            style={{
              background: '#debe49',
              color: '#141414',
              fontWeight: '400',
              position: 'fixed',
              bottom: '100px',
              right: '100px',
            }}
          />
          <IconButton
            title='Favorites'
            icon={'heart'}
            size='lg'
            onClick={() => console.log('view favorite list')}
            style={{
              background: '#debe49',
              color: '#141414',
              fontWeight: '400',
              position: 'fixed',
              bottom: '150px',
              right: '100px',
            }}
          />
        </div>

      </main>

      <Footer />
    </>
  )
}
