import { IconButton } from "./components/IconButton"
import { Input } from "./components/Input"

const addNewNote = ( ) => {
  return(
    <Input id={""}    />
    <IconButton/>
    <IconButton/>
  )
}
ReactDOM.render(addNewNote(), document.getElementById('root'))





{/* <OptionsButtons 
                children={
                  <><IconButton
                    id='copy-button'
                    title='copy'
                    icon={'copy'}
                    onClick={() => console.log('copied note')}
                    style={{
                      color: '#e6e6e6'
                    }} /><IconButton
                      id='edit-button'
                      title='edit'
                      icon={'pen'}
                      onClick={() => console.log('copied note')}
                      style={{
                        color: '#e6e6e6'
                      }} /><IconButton
                      id='favorite-button'
                      title='favorite'
                      icon={'heart'}
                      onClick={() => console.log('copied note')}
                      style={{
                        color: '#e6e6e6'
                      }} /><IconButton
                      id='delete-button'
                      title='delete'
                      icon={'trash'}
                      onClick={() => console.log('copied note')}
                      style={{
                        color: '#e6e6e6'
                      }} />
                  </>
                }
              /> */}