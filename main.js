import './style.css'

const getNotesObject = () => JSON.parse(localStorage.getItem('notes'))

const getNotesArray = () => {
  const notes = getNotesObject()
  return Object.keys(notes).reduce((acu, cur) => ([...acu, { id: cur, note: notes[cur] }]), [])
}
const setNotesObject = (notesObject) => localStorage.setItem('notes', JSON.stringify(notesObject))

const start = () => {

  // first get items (primero obtener elementos)
  const searchInputElement = document.getElementById('search-input')
  const searchButtonElement = document.getElementById('search-button')
  const addNoteElement = document.getElementById('add-note')
  const newNoteElement = document.getElementById('new-note')
  const newNoteButtonElement = document.getElementById('new-note-button')
  const cancelNewNoteElement = document.getElementById('cancel-new-note')
  const newNoteInputElement = document.getElementById('new-note-input')
  const containNotesElement = document.getElementById('contain-notes')

  // validate
  if (!searchInputElement) return console.warn('element with id "search-input" does not exist ')
  if (!searchButtonElement) return console.warn('element with id "search-button" does not exist ')
  if (!addNoteElement) return console.warn('element with id "add-note" does not exist ')
  if (!newNoteElement) return console.warn('element with id "new-note" does not exist ')
  if (!newNoteButtonElement) return console.warn('element with id "new-note-button" does not exist ')
  if (!cancelNewNoteElement) return console.warn('element with id "cancel-new-note" does not exist ')
  if (!newNoteInputElement) return console.warn('element with id "new-note-input" does not exist ')

  // functions
  const onToggleNotesOptionsVisibility = () => {
    newNoteElement.classList.toggle('hide')
  }

// ADD NOTES: event outside the notes
  const addNotes = () => {
    const notes = getNotesObject()
    const newNote = newNoteInputElement.value
    
    const id = Math.round(Math.random() * 1000000)
    const newNotes = { ...notes, [id]: newNote }

    if (newNote=== '') return alert('please enter at least one character')
    if (newNote=== ' ') return alert('please enter at least one character')

    setNotesObject(newNotes)
    newNoteInputElement.value = ''
    displayNotes(getNotesArray())
    
  }

  const onHideAddNoteElement = () => addNoteElement.classList.add('hide')
  const onHideEditNote = () => newNoteElement.classList.add('hide')

  const onShowAddNoteElement = () => addNoteElement.classList.remove('hide')
  
  addNoteElement.addEventListener('mouseup',onHideAddNoteElement)
  newNoteButtonElement.addEventListener('mouseup',onHideEditNote)
  cancelNewNoteElement.addEventListener('click',onHideEditNote)
  
  newNoteButtonElement.addEventListener('mouseup',onShowAddNoteElement)
  cancelNewNoteElement.addEventListener('click',onShowAddNoteElement)


// "id" update in notes and visibility in the screen
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

  const renderEditNote = ({ note, id }) => `<li id='${id}-edit' class="note-item edit">
    <input id='${id}-note-input' class="note-input" value="${note}"/>
    <button><i id='${id}-save-note' class="fa fa-check" aria-hidden="true"></i></button>
    <button><i id='${id}-cancel-edit-note' class="fa fa-times" aria-hidden="true"></i></i></button>
  </li>`
  
// write the notes in html to display them on the screen
  const displayNotes = (notesArray) => {
    containNotesElement.innerHTML = notesArray.map((cur) => {

      const noteElement = renderWrapperNote({ noteElement: renderNote(cur), id: cur.id })

      return noteElement
    }).join('')
  }

  // ADD EVENTS IN NOTES (EVENTOS EN LAS NOTAS)
  const addEventsOnNotes = (notes) => {
    Object.keys(notes).forEach(cur => {
      const noteContainerId = `${cur}-container`
      const noteOptionsId = `${cur}-note-options`
      const buttonCopyNoteId = `${cur}-copy-note`
      const buttonDeleteNoteId = `${cur}-delete-note`
      const buttonEditNoteId = `${cur}-edit-note`

    // selection
      const noteItemElement = document.getElementById(noteContainerId)
      const noteOptionsElement = document.getElementById(noteOptionsId)
      const buttonCopyNote = document.getElementById(buttonCopyNoteId)
      const buttonDeleteNote = document.getElementById(buttonDeleteNoteId)
      const buttonEditNoteElement = document.getElementById(buttonEditNoteId)

    //validate
      if (!noteItemElement) return console.warn(`element with id "${noteContainerId}" does not exist `)
      if (!noteOptionsElement) return console.warn(`element with id "${noteOptionsId}" does not exist `)
      if (!buttonCopyNote) return console.warn(`element with id "${buttonCopyNoteId}" does not exist `)
      if (!buttonDeleteNote) return console.warn(`element with id "${buttonDeleteNoteId}" does not exist `)
      if (!buttonEditNoteElement) return console.warn(`element with id "${buttonEditNoteId}" does not exist `)
      
      // note options visibility
      const onHideNoteOptions = () => noteOptionsElement.classList.add('hide')

      const onShowNoteOptions = () => noteOptionsElement.classList.remove('hide')
// copy note
      const onCopyNote = (noteValue) => {
        noteOptionsElement.classList.add('hide')
        navigator.clipboard.writeText(noteValue)
      }
// delete note
      const onDeleteNote = (key) => {
        const notesCopy = { ...getNotesObject() }
        delete notesCopy[key]
        setNotesObject(notesCopy)
        displayNotes(getNotesArray())
        addEventsOnNotes(getNotesObject())
      }
// update of the notes and their printing on the screen
      const addUpdate = ({ id }) => {
        const noteInputId = `${id}-note-input`
        // const containerEditId = `${id}-container-edit`
        const noteInputElement = document.getElementById(noteInputId)
        // const containerEditElement = document.getElementById(containerEditId)
        if (!noteInputElement) return console.warn('cant find input note element')
        // if (!containerEditElement) return console.warn('I can not find the id of the selected element')

        const notes = getNotesObject()
        const newNotes = { ...notes, [id]: noteInputElement.value }
        setNotesObject(newNotes)
        displayNotes(getNotesArray())
        addEventsOnNotes(getNotesObject())

      }
// edit note
      const onShowEditNote = ({ id, note }) => {
        noteItemElement.innerHTML = renderEditNote({ note, id })

        const saveNoteId = `${id}-save-note`
        const cancelEditNoteId = `${id}-cancel-edit-note`
        const saveNoteElement = document.getElementById(saveNoteId)
        const cancelEditNoteElement = document.getElementById(cancelEditNoteId)
        if (!saveNoteElement) return console.warn('cant find save note id')
        if (!cancelEditNoteElement) return console.warn('cant find save note id')

        // const onHideEditNote = () => newNoteElement.classList.add('hide')

        saveNoteElement.addEventListener('click', () => addUpdate({ id }))
        // cancelEditNoteElement.addEventListener('click',()=> addNotes)
      }
// note options events
      noteItemElement.addEventListener('mouseenter', onShowNoteOptions)
      noteItemElement.addEventListener('mouseleave', onHideNoteOptions)
      buttonCopyNote.addEventListener('click', () => onCopyNote(notes[cur]))
      buttonDeleteNote.addEventListener('click', () => onDeleteNote(cur))
      buttonEditNoteElement.addEventListener('click', () => onShowEditNote({ id: cur, note: notes[cur] }))
    })
  }

// searcher note: event outside the notes
  const searchingNote = () => {
    const searchInputValue = searchInputElement.value
    if (!searchInputValue) return displayNotes(getNotesArray())

    const notesFiltered = getNotesArray().filter(note => note.note.includes(searchInputValue))

    displayNotes(notesFiltered)

  }
// EVENTS OUTSIDE THE NOTES
  const eventOfKey = (event) => {
    // if ()
    if (event.key === "Enter") {
      event.preventDefault()
      searchButtonElement.click()
    }
    searchingNote
  }

  searchButtonElement.addEventListener('click', searchingNote)
  addNoteElement.addEventListener('click', onToggleNotesOptionsVisibility)
  newNoteButtonElement.addEventListener('click', addNotes)

  searchInputElement.addEventListener("keypress",eventOfKey)
  searchInputElement.addEventListener("keyup",searchingNote)
  
  displayNotes(getNotesArray())
  addEventsOnNotes(getNotesObject())
  
}

start()

// TODO:
// - read all code and understand, after that propose how to improve code
// - hide form after add a note
// - add cancel button (x) before input when edit a node
// - add enter event on search
// - search on every key pressed
// - show a message confirmation (alert) before to delete a note
// - add mouse: pointer in all clickable elements
// - add footer, with creator and yearconst keyBoard = Event.key