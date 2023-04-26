import './style.css'

const getNotesObject = () => JSON.parse(localStorage.getItem('notes'))
const getNotesArray = () => {
  const notes = getNotesObject()
  return Object.keys(notes).reduce((acu, cur) => ([...acu, { id: cur, note: notes[cur] }]), [])
}
const setNotesObject = (notesObject) => localStorage.setItem('notes', JSON.stringify(notesObject))

const start = () => {
  //variables
  // let notes = getNotesObject()


  //primero obtener elementos
  const searchInputElement = document.getElementById('search-input')
  const searchButtonElement = document.getElementById('search-button')
  const addNoteElement = document.getElementById('add-note')
  const newNoteElement = document.getElementById('new-note')
  const newNoteButtonElement = document.getElementById('new-note-button')
  const newNoteInputElement = document.getElementById('new-note-input')
  const containNotesElement = document.getElementById('contain-notes')
  // const buttonEditNote=document.getElementById('edit-note')
  // return buttonEditNote

  // console.log('1') //


  //validate
  if (!searchInputElement) return console.warn('element with id "search-input" does not exist ')
  if (!searchButtonElement) return console.warn('element with id "search-button" does not exist ')
  if (!addNoteElement) return console.warn('element with id "add-note" does not exist ')
  if (!newNoteElement) return console.warn('element with id "new-note" does not exist ')
  if (!newNoteButtonElement) return console.warn('element with id "new-note-button" does not exist ')
  if (!newNoteInputElement) return console.warn('element with id "new-note-input" does not exist ')
  // if(!containNotesElement)return console.warn('element with id "contain-notes" does not exist ')
  // if(!buttonEditNote)return console.warn('element with id "edit-note" does not exist')

  // console.log('2') //

  //functions
  const onToggleNotesOptionsVisibility = () => {
    newNoteElement.classList.toggle('hide')
  }

  const addNotes = () => {
    const notes = getNotesObject()
    const newNote = newNoteInputElement.value
    const id = Math.round(Math.random() * 1000000)
    const newNotes = { ...notes, [id]: newNote }
    setNotesObject(newNotes)
    newNoteInputElement.value = ''
    displayNotes(getNotesArray())
  }

  const renderWrapperNote = ({ noteElement, id }) => `<li id='${id}-container' class="note-item">
    ${noteElement}
  </li>`

  const renderNote = ({ note, id }) => `
    <span id='${id}-note'>${note}</span>
    <div id='${id}-note-options' class="note-item-options hide">
      <button id='${id}-copy-note'><i  class="fa fa-clone" aria-hidden="true"></i></button>
      <button><i id='${id}-edit-note' class="fa fa-pencil" aria-hidden="true"></i></button>
      <button><i id='${id}-delete-note' class="fa fa-trash" aria-hidden="true"></i></button>
    </div>
  `

  const renderEditNote = ({ note, id }) => `<li id='${id}-container' class="note-item edit">
    <input id='${id}-note-input' class="note-input" value="${note}"/>
    <button><i id='${id}-save-note' class="fa fa-check" aria-hidden="true"></i></button>
  </li>`

  const displayNotes = (notesArray) => {
    containNotesElement.innerHTML = notesArray.map((cur) => {

      const noteElement = renderWrapperNote({ noteElement: renderNote(cur), id: cur.id })

      return noteElement
    }).join('')
  }

  const addEventsOnNotes = (notes) => {
    Object.keys(notes).forEach(cur => {
      const noteContainerId = `${cur}-container`
      const noteOptionsId = `${cur}-note-options`
      const buttonCopyNoteId = `${cur}-copy-note`
      const buttonDeleteNoteId = `${cur}-delete-note`
      const buttonEditNoteId = `${cur}-edit-note`

      const noteItemElement = document.getElementById(noteContainerId)
      const noteOptionsElement = document.getElementById(noteOptionsId)
      const buttonCopyNote = document.getElementById(buttonCopyNoteId)
      const buttonDeleteNote = document.getElementById(buttonDeleteNoteId)
      const buttonEditNoteElement = document.getElementById(buttonEditNoteId)

      if (!noteItemElement) return console.warn(`element with id "${noteContainerId}" does not exist `)
      if (!noteOptionsElement) return console.warn(`element with id "${noteOptionsId}" does not exist `)
      if (!buttonCopyNote) return console.warn(`element with id "${buttonCopyNoteId}" does not exist `)
      if (!buttonDeleteNote) return console.warn(`element with id "${buttonDeleteNoteId}" does not exist `)
      if (!buttonEditNoteElement) return console.warn(`element with id "${buttonEditNoteId}" does not exist `)

      const onHideNoteOptions = () => noteOptionsElement.classList.add('hide')

      const onShowNoteOptions = () => noteOptionsElement.classList.remove('hide')

      const onCopyNote = (noteValue) => {
        noteOptionsElement.classList.add('hide')
        navigator.clipboard.writeText(noteValue)
      }

      const onDeleteNote = (key) => {
        const notesCopy = { ...getNotesObject() }
        delete notesCopy[key]
        setNotesObject(notesCopy)
        displayNotes(getNotesArray())
        addEventsOnNotes(getNotesObject())
      }

      const addUpdate = ({ id }) => {
        const noteInputId = `${id}-note-input`
        const noteInputElement = document.getElementById(noteInputId)
        if (!noteInputElement) return console.warn('cant find input note element')

        const notes = getNotesObject()
        const newNotes = { ...notes, [id]: noteInputElement.value }
        setNotesObject(newNotes)
        displayNotes(getNotesArray())
        addEventsOnNotes(getNotesObject())
      }

      const onShowEditNote = ({ id, note }) => {
        noteItemElement.innerHTML = renderEditNote({ note, id })

        const saveNoteId = `${id}-save-note`
        const saveNoteElement = document.getElementById(saveNoteId)
        if (!saveNoteElement) return console.warn('cant find save note id')

        saveNoteElement.addEventListener('click', () => addUpdate({ id }))
      }

      noteItemElement.addEventListener('mouseenter', onShowNoteOptions)
      noteItemElement.addEventListener('mouseleave', onHideNoteOptions)
      buttonCopyNote.addEventListener('click', () => onCopyNote(notes[cur]))
      buttonDeleteNote.addEventListener('click', () => onDeleteNote(cur))
      buttonEditNoteElement.addEventListener('click', () => onShowEditNote({ id: cur, note: notes[cur] }))
    })
  }


  console.log('4') //
  //SEARCHER
  const searchingNote = () => {
    const searchInputValue = searchInputElement.value
    if (!searchInputValue) return displayNotes(getNotesArray())

    const notesFiltered = getNotesArray().filter(note => note.note.includes(searchInputValue))
    displayNotes(notesFiltered)
  }


  //eventos
  searchButtonElement.addEventListener('click', searchingNote)
  addNoteElement.addEventListener('click', onToggleNotesOptionsVisibility)
  newNoteButtonElement.addEventListener('click', addNotes)
  // buttonCopyNoteElement.addEventListener('click',)
  // buttonDeleteNoteElement.addEventListener('click',)


  displayNotes(getNotesArray())
  addEventsOnNotes(getNotesObject())


  // // EDIT
  // // renderNote()
  // const onEditNote = (key, notes) => {
  //   const noteContainerId = `${key}-container`
  //   const noteOptionsId = `${key}-note-options`
  //   const editNoteId = 'edit-note'
  //   console.log('estoy dentro del edit')
  //   const noteItemElement = document.getElementById(noteContainerId)
  //   const noteOptionsElement = document.getElementById(noteOptionsId)
  //   const buttonEditNote = document.getElementById(editNoteId)

  //   if (!noteItemElement) return console.warn(`element with id "${noteContainerId}" does not exist `)
  //   if (!noteOptionsElement) return console.warn(`element with id "${noteOptionsId}" does not exist `)
  //   if (!buttonEditNote) return console.warn(`element with id "${editNoteId}" does not exist `)


  //   buttonEditNote.addEventListener('click', aqui())
  // }
}

start()

// TODO:
// - read all code and understand
// - hide form after add a note
// - add cancel button (x) before input when edit a node
// - add enter event on search
// - search on every key pressed
// - show a message confirmation (alert) before to delete a note
// - add mouse: pointer in all clickable elements
// - add footer, with creator and year