import { useEffect, useMemo, useState } from 'react'
import { DESIGN_SYSTEM } from './constants'

import { IconButton } from './components/IconButton'
import { Input } from './components/Input'
import { Note } from './components/Note'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { AddNoteForm } from './components/AddNoteForm'

type NoteItem = { id: string, content: string, favorite: boolean }

const NOTE_LIST: NoteItem[] = []

export const App = () => {
  const [displayAddNoteForm, setDisplayAddNoteForm] = useState(false)
  const [displayFavoritesNotes, setDisplayFavoritesNotes] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [sortDirection, setSortDirection] = useState(false)
  const [notes, setNotes] = useState(NOTE_LIST)

  const notesProcessed = useMemo(() => {
    const filteredNotes = notes.filter((cur) => cur.content.includes(searchInput))
    const sortedNotes = filteredNotes.sort((a, b) => {
      if (a.content.toLowerCase() < b.content.toLowerCase()) return -1
      if (a.content.toLowerCase() === b.content.toLowerCase()) return 0
      return 1
    })
    if (sortDirection) return sortedNotes
    return sortedNotes.reverse()
  }, [notes, searchInput, sortDirection])

  const notesFavorites = useMemo(() => {
    const favoriteList =  notesProcessed.filter((cur) => cur.favorite)
    const sortedNotes = favoriteList.sort((a, b) => {
      if (a.content.toLowerCase() < b.content.toLowerCase()) return -1
      if (a.content.toLowerCase() === b.content.toLowerCase()) return 0
      return 1
    })
    if (sortDirection) return sortedNotes
    return sortedNotes.reverse()
  }, [setDisplayFavoritesNotes, notes, sortDirection])

  const onAddNote = (content: string) => {
    const newNote: NoteItem = { id: String(Math.round(Math.random() * 1000000)), content, favorite: false }
    setNotes(prev => ([...prev, newNote]))
    setDisplayAddNoteForm(false)
  }

  const onCancelAddNote = () => setDisplayAddNoteForm(false)

  const onEditNote = (id: string, content: string) => {
    setNotes(prev => prev.map(cur => cur.id === id ? ({ ...cur, content }) : cur))
    setDisplayAddNoteForm(false)
  }

  const onDeleteNote = (id: string) => {
    setNotes(prev => prev.filter(cur => cur.id !== id))
  }

  const onFavoriteNote =(id:string) => {
    setNotes(prev=>prev.map((cur)=> cur.id===id ? ({...cur,favorite:!cur.favorite}) : cur))
  }

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

      <main style={{background: DESIGN_SYSTEM.black }}>
        <div style={{ maxWidth: '800px', margin: 'auto' }} >
          <div style={{ display: "flex", gap: "0", alignItems: 'center', marginBottom: "30px" }}>
          <IconButton
              type='button'
              title='search'
              icon={'search'}
              onClick={() => console.log('search')}
              style={{
                width: '45px',
                height: '40px',
                fontSize:'14px',
                background: DESIGN_SYSTEM.gray,
                color: DESIGN_SYSTEM.white,
                borderRadius:'50% 0 0 50%',

              }}
            />

            <Input type='search' placeholder='Search' value={searchInput} setValue={setSearchInput} 
              style={{
                outline: 'none',
                color: DESIGN_SYSTEM.main,
                borderRadius:'0',
                padding: '10px 0',
                backgroundImage: "url('https://img.icons8.com/ios/100/000000/search--v1.png')",
                backgroundRepeat:'no-repeat',
                backgroundSize:' 5px', 
                fontFamily: DESIGN_SYSTEM.fontFamily,
                letterSpacing:'0px',
                lineHeight:'20px',
              }}
            />
            
            <IconButton
              type='button'
              title='order'
              icon={'arrow-down'}
              onClick={() => setSortDirection(prev => !prev)}
              // size=''
              style={{
                background: DESIGN_SYSTEM.main,
                color: DESIGN_SYSTEM.black,
                width: '45px',
                height: '40px',
                fontSize:'14px',
                background: DESIGN_SYSTEM.gray,
                color: DESIGN_SYSTEM.white,
                borderRadius: sortDirection ? '0 50% 50% 0 ' : '50% 0 0 50%',
                transform: sortDirection ? 'rotate(0deg)' : 'rotate(180deg)',
                transition: '.5s',
              }}
            />
          </div>

          {displayAddNoteForm && (<AddNoteForm onSubmit={onAddNote} onCancel={onCancelAddNote} style={{ marginBottom: "20px" }} />)}

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

            {displayFavoritesNotes && notesFavorites.map((cur) => <Note key={cur.id} id={cur.id} favorite={cur.favorite} onEdit={onEditNote} onDelete={onDeleteNote} onFavorite={onFavoriteNote}>{cur.content}</Note>)}
            {!displayFavoritesNotes && notesProcessed.map((cur) => <Note key={cur.id} id={cur.id} favorite={cur.favorite} onEdit={onEditNote} onDelete={onDeleteNote} onFavorite={onFavoriteNote}>{cur.content}</Note>)}
          </div>

          <IconButton
            title='Add Note'
            icon={'plus'}
            size='lg'
            onClick={() => setDisplayAddNoteForm((prev) => !prev)}
            style={{
              background: DESIGN_SYSTEM.main,
              color: DESIGN_SYSTEM.black,
              fontWeight: '400',
              position: 'fixed',
              bottom: '10%',
              right: '8%',
              height: "48px",
              width: "48px",
              fontSize: '16px',
              transform: displayAddNoteForm ? 'rotate(45deg)' : 'rotate(180deg)',
              transition: '.5s'
            }}
          />
          <IconButton
            title='Favorites'
            icon={'heart'}
            size='lg'
            onClick={() => setDisplayFavoritesNotes((prev) => !prev)}
            style={{
              background: displayFavoritesNotes ? DESIGN_SYSTEM.black : DESIGN_SYSTEM.main,
              color: displayFavoritesNotes ? DESIGN_SYSTEM.main : DESIGN_SYSTEM.black,
              fontWeight: '400',
              position: 'fixed',
              bottom: '16%',
              right: '8%',
              height: "48px",
              width: "48px",
              fontSize: '16px',
              transition: '.4s'
            }}
          />
        </div>

      </main>

      <Footer />
    </>
  )
}
