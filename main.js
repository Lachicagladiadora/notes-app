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



// SEARCHER

const containInputElement=document.getElementById('containSInput')
const containButtonElement=document.getElementById('containSearchButton')


const roundedInput=({id,type,placeholder,name})=>{
  return`
  <input type='${type}' id='${id}' placeholder='${placeholder}' name='${name}'>
    
  </input>
  `
}
containInputElement.innerHTML=roundedInput({id:'searchInput',type:'search',placeholder:'write note',name:'searchInput'})
const searchInputElement=document.getElementById('searchInput')
searchInputElement.classList.add('search-input')

const roundedButton=({id,children,onclick,type})=>{
  return`
  <button id='${id}' type='${type}' onclick,>
    ${children}
  </button>
  `
}
containButtonElement.innerHTML=roundedButton({id:'searchButton',type:'submit', children:'<i id="img" class="fa fa-search" aria-hidden="true"></i>'})
const searchButtonElement=document.getElementById('searchButton')
searchButtonElement.classList.add('search-button')

//NOTES LIST
const containNotesElement=document.getElementById('containNotes')

const noteList=[];
noteList.push('recommendation read the odyssey')
noteList.push('watch the series silicon valley')
noteList.push('search tuberculosis articles')

const itemNotesList=noteList.map(item=>`<li id='noteItem' class='note-item' >${item}</li>`).join("")
containNotesElement.innerHTML=itemNotesList
const noteItemElement=document.getElementById('noteItem')


//BUTTON FAVORITES AND ADD

// BUTTON OF FAVORITES
const favoritesElement=document.getElementById('favorites')

const buttonFavorites=({id, children})=>{
  return`
  <button id='${id}'>
  ${children}
  </button>
  `
}
favoritesElement.innerHTML=buttonFavorites({id:'buttonFavorites', children:'<i class="fa fa-star" aria-hidden="true"></i>'})
const buttonFavoritesElement=document.getElementById('buttonFavorites')
buttonFavoritesElement.classList.add('button-favorites')

// BUTTON FOR ADD NOTE
const newNoteElement=document.getElementById('newNote')

const buttonAddNotes=({id,children})=>{
  return`
  <button id='${id}'>
  ${children}
  </button>
  `
}
newNoteElement.innerHTML=buttonAddNotes({id:'buttonAddNotes',children:'<i class="fa fa-plus" aria-hidden="true"></i>'})
const buttonAddNotesElement=document.getElementById('buttonAddNotes')
buttonAddNotesElement.classList.add('add-notes')


//save notes in local storage

//responsive


//add favorites 



//add favorites 

//copy note 

//edit note
//delete note
