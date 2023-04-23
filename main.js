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



//   //INPUT
// const renderInput=({id,type,placeholder,className})=>{
//   return`
//   <input id='${id}' type='${type}' placeholder='${placeholder}' class='${className}'>
//   </input>
//   `
// }
// containSearchInputElement.innerHTML=renderInput({id:'searchInput',type:'search',placeholder:'write note', className:'search-input'})
// const searchInputElement=document.getElementById('searchInput')
//   //BUTTON
// const renderButtonSearch=({id,className,children})=>{
//   return`
//   <button id='${id}' class='${className}'>
//   ${children}
//   </button>
//   `
// }
// containSearchButtonElement.innerHTML=renderButtonSearch({id:'searchButton',className:'search-button',children:'<i class="fa fa-search" aria-hidden="true"></i>'})
// const searchButtonElement=document.getElementById('searchButton')


// const containInputElement=document.getElementById('containSInput')
// const containButtonElement=document.getElementById('containSearchButton')

// const roundedInput=({id,type,placeholder,name})=>{
//   return`
//   <input type='${type}' id='${id}' placeholder='${placeholder}' name='${name}'>
    
//   </input>
//   `
// }
// containInputElement.innerHTML=roundedInput({id:'searchInput',type:'search',placeholder:'write note',name:'searchInput'})
// const searchInputElement=document.getElementById('searchInput')
// searchInputElement.classList.add('search-input')

// const roundedButton=({id,children,type})=>{
//   return`
//   <button id='${id}' type='${type}' >
//     ${children}
//   </button>
//   `
// }
// containButtonElement.innerHTML=roundedButton({id:'searchButton',type:'submit',children:'<i id="img" class="fa fa-search" aria-hidden="true"></i>'})
// const searchButtonElement=document.getElementById('searchButton')
// searchButtonElement.classList.add('search-button')


//NOTES LIST

// const containNotesElement=document.getElementById('containNotes')

// const noteList=[];
// noteList.push('recommendation read the odyssey')
// noteList.push('watch the series silicon valley')
// noteList.push('search tuberculosis articles')

// const itemNotesList=noteList.map(item=>`<li id='noteItem' class='note-item' >${item}</li>`).join("")
// containNotesElement.innerHTML=itemNotesList
// const noteItemElement=document.getElementById('noteItem')


//BUTTON FAVORITES AND ADD

// BUTTON OF FAVORITES
// const favoritesElement=document.getElementById('favorites')

// const buttonFavorites=({id, children})=>{
//   return`
//   <button id='${id}'>
//   ${children}
//   </button>
//   `
// }
// favoritesElement.innerHTML=buttonFavorites({id:'buttonFavorites', children:'<i class="fa fa-star" aria-hidden="true"></i>'})
// const buttonFavoritesElement=document.getElementById('buttonFavorites')
// buttonFavoritesElement.classList.add('button-favorites')

// BUTTON FOR ADD NOTE
// const newNoteElement=document.getElementById('newNote')

// const buttonAddNotes=({id,children})=>{
//   return`
//   <button id='${id}'>
//   ${children}
//   </button>
//   `
// }
// newNoteElement.innerHTML=buttonAddNotes({id:'buttonAddNotes',children:'<i class="fa fa-plus" aria-hidden="true"></i>'})
// const buttonAddNotesElement=document.getElementById('buttonAddNotes')
// buttonAddNotesElement.classList.add('add-notes')


//save notes in local storage

//responsive


//add favorites 



//add favorites 

//copy note 

//edit note
//delete note
