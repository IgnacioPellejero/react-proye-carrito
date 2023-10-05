import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <Navbar />
    <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  </React.StrictMode>,
)
