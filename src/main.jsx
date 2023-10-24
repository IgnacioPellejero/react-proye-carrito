import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/itemCount';
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter,Route,Routes } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'} />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  </React.StrictMode>
);
export default createRoot;
