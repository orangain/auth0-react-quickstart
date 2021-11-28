import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <LoginButton />
          <Profile />
          <LogoutButton />
        </p>
      </header>
    </div>
  )
}

export default App
