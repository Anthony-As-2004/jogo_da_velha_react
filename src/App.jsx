import { useState } from 'react'
import reactLogo from './assets/frog.svg'
import viteLogo from './assets/rat.svg'
import './App.css'
import Board from './componentes/board'

function App() {
  

  return (
    <>
      <div>
        <a href="https://pt.wikipedia.org/wiki/Rato" target="_blank">
          <img src={viteLogo} className="logo react" alt="Vite logo" />
        </a>
        <a href="https://pt.wikipedia.org/wiki/Sapo" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>JOGO DA VELHA</h1>
      <div className="card">
        <Board />
      </div>
    </>
  )
}

export default App
