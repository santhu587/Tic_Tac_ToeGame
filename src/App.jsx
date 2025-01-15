import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Baord from './Tictacgame/Board'
function App() {
  const [count, setCount] = useState(0)

  return (
  
  <div><Baord></Baord>
  <div class="footer">
    <p>Welcome to Tic Tac Toe Game, developed by Santhosh, guided by Piyush Garg</p>
</div>
  </div>
  )
}

export default App
