import { useState } from 'react'

import './App.css'

import Main from './Main/Main'
import Profile from './Profile/Profile'
import profileImage from "./assets/hero.png"
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='app'>

      <Profile name="Elijah" image={profileImage} stats={[
        { label: "Applications", value: 12 },
        { label: "Interviews", value: 4 },
        { label: "Offers", value: 4 }
      ]} />
      <div className='app__main'>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </div>

  )
}

export default App
