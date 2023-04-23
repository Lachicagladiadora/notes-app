import './style.css'

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
// setupCounter(document.querySelector('#counter'))



const start=()=>{
//variables
let notes=JSON.parse(localStorage.getItem('notes'))


//primero obtener elementos
const searchInputElement=document.getElementById('search-input')
const searchButtonElement=document.getElementById('search-button')
const favoritesNoteElement=document.getElementById('favorites-note')
const addNoteElement=document.getElementById('add-note')
const newNoteElement=document.getElementById('new-note')
const newNoteButtonElement=document.getElementById('new-note-button')
const newNoteInputElement=document.getElementById('new-note-input')
const containNotesElement=document.getElementById('contain-notes')
// console.log('1')


//validate
if(!searchInputElement)return console.warn('element with id "search-input" does not exist ')
if(!searchButtonElement)return console.warn('element with id "search-button" does not exist ')
if(!favoritesNoteElement)return console.warn('element with id "favorites-note" does not exist ')
if(!addNoteElement)return console.warn('element with id "add-note" does not exist ')
if(!newNoteElement)return console.warn('element with id "new-note" does not exist ')
if(!newNoteButtonElement)return console.warn('element with id "new-note-button" does not exist ')
if(!newNoteInputElement)return console.warn('element with id "new-note-input" does not exist ')
if(!containNotesElement)return console.warn('element with id "contain-notes" does not exist ')

// console.log('2')

//functions
const onToggleNotesOptionsVisibility=()=>{
  newNoteElement.classList.toggle('hide',)
}

const addNotes=()=>{
 const newNote=newNoteInputElement.value
 console.log(newNote)
 const id=Math.round(Math.random()*1000000)
 const newNotes={...notes,[id]:newNote}
 localStorage.setItem('notes',JSON.stringify(newNotes))
 notes=newNotes
 newNoteInputElement.value=''
 displayNotes(Object.values(notes))
}

const renderNote=(note)=>`<li id="noteItem" class="note-item">${note}</li>`
const displayNotes=(notes)=>{
  containNotesElement.innerHTML=notes.map((cur)=>renderNote(cur)).join('')
}

// console.log('3')

//eventos
addNoteElement.addEventListener('click',onToggleNotesOptionsVisibility)
newNoteButtonElement.addEventListener('click',addNotes)

//initial function
displayNotes(Object.values(notes))

}




// console.log('4')
start()
// SEARCHER


