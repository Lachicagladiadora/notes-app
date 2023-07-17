import ReactDOM from 'react-dom/client'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { App } from './App'

import './index.css'

library.add(fab, fas)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <App />

)
