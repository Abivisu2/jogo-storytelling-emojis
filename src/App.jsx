import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dado1 from './components/Dado1'

function App() {

  return (
    <>


      <div className="div-app">

        <div className="div-titulo-pagina">
          <h1 className='titulo-pagina'>Jogo que conta uma história aleatória através de emojis 🥳</h1>
        </div>

        <Dado1/>  

      </div>

    </>
  )
}

export default App
