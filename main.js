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




const searchElement=document.getElementById("search")
const notesWrittenElement=document.getElementById('notesWritten')

const favoritesElement=document.getElementById('favorites')
const newNoteElement=document.getElementById('newNote')

const noteList=[]

// guardar nota en local Storage

// poder buscar
function filterNote(noteList){
  noteList.fil
}

// const 
const searchInputElement = document.createElement('input')
const searchButtonElement = document.createElement('button')
const searchImgElement = document.createElement('img')
searchInputElement.classList.add('search-input')
searchButtonElement.classList.add('search-button')
searchImgElement.classList.add('search-img')
searchImgElement.setAttribute('src', search.image)
searchImgElement.addEventListener('click',filterNote )

searchElement.appendChild(searchInputElement)
searchElement.appendChild(searchButtonElement)
searchButtonElement.appendChild(searchImgElement)


// poder agregar una nota

noteList.push({
  
})

function renderNote(array){
  for(element of array){
    const element=document.createElement('textarea')
    noteWrite.classList.add('note-write')
    
    notesWrittenElement.appendChild(noteWrite)

  }
}

// poder copiar una nota


// poder editar una nota


// poder borrar una nota


// responsive desing


// poder agregar a favoritos


// 









