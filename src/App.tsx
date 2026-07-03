import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Profile from './Profile/Profile'
import profileImage from "./assets/hero.png"
import { Routes, Route } from 'react-router-dom'

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(true);


  /* FUNCTIONS */
  const toggleSidebar = () => {
    setSideBarOpen(prev => !prev);
  }

  return (

    <div className='app'>

      <Profile open={sidebarOpen} name="Elijah" toggleSidebar={toggleSidebar} image={profileImage} stats={[
        { label: "Applications", value: 12 },
        { label: "Interviews", value: 4 },
        { label: "Offers", value: 4 }
      ]} />

      <div className='app__main'>
        <Header />
        <Routes>


          <Route path='/' element={<Main />} />

          {/* <section></section>
          <section></section> */}
        </Routes>
      </div>
    </div>

  )
}

export default App
