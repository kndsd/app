import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'
import InfoAluno from './components/InfoAluno'
import InfoCurso from './components/Infocurso'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>bem-vindo ao meu projeto</h1>
      <Mensagem/>
      <InfoAluno/>
      <InfoCurso/>
    </>
  )
}

export default App
