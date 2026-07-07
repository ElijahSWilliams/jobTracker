import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Profile from './Profile/Profile'
import AddJobModal from './addJobModal/AddJobModal'
import profileImage from "./assets/hero.png"
import { Routes, Route } from 'react-router-dom'
import { initialJobs, type Jobs } from './Data/jobs'

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState<Jobs[]>(initialJobs); 
 



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

  /* Statistics. Passed to profile and Main */
  const statistics = [
    {
      label: "Applications",
      value: jobs.length,
    },
    {
      label: "Applied",
      value: jobs.filter(job => job.status === 'Applied').length
    },
    {
      label: "Interviewing",
      value: jobs.filter(job => job.status === 'Interviewing').length
    },
    {
      label: "Offers",
      value: jobs.filter(job => job.status === 'Offer').length
    },
    {
      label: "Rejected",
      value: jobs.filter(job => job.status === 'Rejected').length
    },
    {
      label: "Saved",
      value: jobs.filter(job => job.status === 'Saved').length
    }
  ]



  return (
    <div className='app'>

      <Profile open={sidebarOpen} name="Elijah" toggleSidebar={toggleSidebar} image={profileImage} stats={statistics} />

      <div className='app__main'>
        <Header />
        <Routes>


          <Route path='/' element={<Main toggleModalOpen={toggleModalOpen} jobs={initialJobs} />} />

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
