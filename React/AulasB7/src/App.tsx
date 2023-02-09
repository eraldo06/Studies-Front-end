import { useState } from 'react'

function App() {

  const [numero, setNumero] = useState(0)
    
  const mais = () =>{
      setNumero(numero + 1)
  }

  const menos = () =>{
      setNumero(numero - 1)
}

  return (
    <div>
      <p>{numero}</p>
      <button onClick={mais}>+</button>
      <button onClick={menos}>-</button>
    </div>
  )
}

export default App
