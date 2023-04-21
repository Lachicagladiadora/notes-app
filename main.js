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



/*
// const searchElement=document.getElementById("search")
// const notesWrittenElement=document.getElementById('notesWritten')
// const imgElement=document.getElementById('img')

// const favoritesElement=document.getElementById('favorites')
// const newNoteElement=document.getElementById('newNote')

// const noteList=[]

// // guardar nota en local Storage

// // poder buscar
// function filterNote(noteList){
//   noteList.filter
// }

// // const 
// const searchInputElement = document.createElement('input')
// const searchButtonElement = document.createElement('button')
// const searchImgElement = document.createElement('img')
// searchInputElement.classList.add('search-input')
// searchButtonElement.classList.add('search-button')
// // searchImgElement.classList.add('search-img')
// // searchImgElement.setAttribute('src', search.image)
// searchImgElement.addEventListener('click',filterNote )

// searchElement.appendChild(searchInputElement)
// searchElement.appendChild(searchButtonElement)
// // searchButtonElement.appendChild(searchImgElement)


// // poder agregar una nota


// noteList.push(newNote)

// function renderNote(array){
//   for(element of array){
//     const element=document.createElement('textarea')
//     noteWrite.classList.add('note-write')
    
//     notesWrittenElement.appendChild(noteWrite)

//   }
// }
// renderNote(noteList)
// poder copiar una nota
// poder editar una nota
// poder borrar una nota
// responsive desing
// poder agregar a favoritos
*/


// searcher

// const searchElement=document.getElementById('search')
const containInputElement=document.getElementById('containSInput')
const containButtonElement=document.getElementById('containSButton')


const roundedInput=({id,type,placeholder,name})=>{
  return`
  <input type='${type}' id='${id}' placeholder='${placeholder}' name='${name}'>
    
  </input>
  `
}
containInputElement.innerHTML=roundedInput({id:'searchInput',type:'search',placeholder:'write note',name:'searchInput'})
const searchInputElement=document.getElementById('searchInput')
searchInputElement.classList.add('search-input')
// searchInputElement.style.background=red;

const roundedButton=({id,children,onclick})=>{
  return`
  <button id='${id}'>
    ${children}
  </button>
  `
};
containButtonElement.innerHTML=roundedButton({id:'searchButton',onclick, children:'<i id="img" class="fa fa-search" aria-hidden="true"></i>'})
const searchButtonElement=document.getElementById('searchButton')
searchButtonElement.classList.add('search-button')

//notes list
const containNotesElement=document.getElementById('containNotes')

const noteList=[];
noteList.push('recommendation read the odyssey')
noteList.push('watch the series silicon valley')
noteList.push('search tuberculosis articles')

const renderNotes=({noteList,id})=>{
  return`

  <div id='${id}'>
  ${noteList}
  </div>
  `
}
containNotesElement.innerHTML=renderNotes({id:'note',noteList})
containNotesElement.classList.add('note-list')


//save notes in local storage

//responsive


//add favorites 


//add favorites 

//copy notes 

//edit notes
//delete note
