import { useState } from 'react'


function App() {
  const [nome, setNome] = useState('Eraldo')

  const roda = ()=>{
    setNome('Leo')
    
  }

  return (
    <div>
      <p>meu nome é {nome}</p>
      <button onClick={roda}>mude nome</button>
      
    </div>
  )
}

export default App
