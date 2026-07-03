import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Profile from './Profile/Profile'
import AddJobModal from './addJobModal/AddJobModal'
import profileImage from "./assets/hero.png"
import { Routes, Route } from 'react-router-dom'

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);


  /* FUNCTIONS */
  const toggleSidebar = () => {
    setSideBarOpen(prev => !prev);
  }

  const toggleModalOpen = () => {
    setIsModalOpen(true);

  }

  const toggleModalClose = () => {

    setIsModalOpen(false);
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


          <Route path='/' element={<Main toggleModalOpen={toggleModalOpen} />} />

          {/* <section></section>
          <section></section> */}
        </Routes>
      </div>


      {/* Conditional Rendering */}
      {isModalOpen && (<AddJobModal toggleModalClose={toggleModalClose} />)}
    </div>


  )
}

export default App
