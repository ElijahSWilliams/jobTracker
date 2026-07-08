import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Profile from './Profile/Profile'
import AddJobModal from './addJobModal/AddJob'
import profileImage from "./assets/hero.png"
import { Routes, Route } from 'react-router-dom'
import { initialJobs, type Jobs } from './Data/jobs'
import Modal from './Modal/Modal';
import JobModal from './JobModal/JobModal'

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Jobs | null>(null)
  const [jobs, setJobs] = useState<Jobs[]>(initialJobs);



  /* FUNCTIONS */
  const toggleSidebar = () => {
    setSideBarOpen(prev => !prev);
  }

  const toggleModalOpen = () => {
    setActiveModal("addJob")

  }

  const toggleModalClose = () => {
    setActiveModal("null");
  }

  const addJob = (job: Jobs) => {
    console.log(job);
    setJobs(prevJobs => [...prevJobs, job]);
  };

  const viewJob = (job: Jobs) => {
    setSelectedJob(job);
    setActiveModal("jobDetails");
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


          <Route path='/' element={<Main toggleModalOpen={toggleModalOpen} jobs={jobs} />} />

          {/* <section></section>
          <section></section> */}
        </Routes>
      </div>


      {/* Conditional Rendering */}
      {activeModal === "addJob" && (<AddJobModal toggleModalClose={toggleModalClose} addJob={addJob} />)}

      {activeModal === "jobDetails" &&
        (<Modal onClose={toggleModalClose} title='Job Details'>
          <JobModal job={jobs} />
        </Modal>)}

    </div>


  )
}

export default App
