import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Profile from "./Profile/Profile";
import AddJob from "./addJobModal/AddJob";
import profileImage from "./assets/hero.png";
import { Routes, Route } from "react-router-dom";
import { initialJobs, type Jobs } from "./Utils/Constants";
import Modal from "./Modal/Modal";
import JobModal from "./JobModal/JobModal";
import EditModal from "./EditModal/EditModal";
import SignUpModal from "./SignUpModal/SignUpModal";
import signUp from "./Utils/Auth";

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Jobs | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false); //user sign in state

  //search for jobs in local storage, if not found use initialJobs
  const [jobs, setJobs] = useState<Jobs[]>(() => {
    //begin arrow function

    try {
      const storedJobs = localStorage.getItem("jobs");
      return storedJobs ? JSON.parse(storedJobs) : initialJobs;
    } catch {
      //else return initalJobs
      return initialJobs;
    } //end try/catch
  }); //end arrow function

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      console.log("Token FOund:", token);

    }
  }, [])

  /* FUNCTIONS */
  const toggleSidebar = () => {
    setSideBarOpen((prev) => !prev);
  };

  const toggleModalOpen = () => {
    setActiveModal("addJob");
  };

  const handleOpenEditModal = () => {
    setActiveModal("editJob");
  };

  const handleOpenSignUpModal = () => {
    setActiveModal("signup");
  };


  const toggleModalClose = () => {
    setActiveModal("null");
  };

  const addJob = (job: Jobs) => {
    console.log(job);
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  const viewJob = (job: Jobs) => {
    setSelectedJob(job);
    setActiveModal("jobDetails");
  };

  const handleDeleteJob = (jobID: string) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobID));
    setActiveModal(null);
  };

  const handleEditJob = (jobID: string, updatedJob: Jobs) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === jobID ? updatedJob : job)),
    );
    console.log("Job Updated:", updatedJob);
    setActiveModal(null); //close modal after edits
  };

  const handleSignUp = (userData) => {
    console.log("Signing You Up");
    signUp(userData)
      .then((res) => {
        console.log('Data:', res);
        //setCurrentUser(userData) 
        //setSigned in to true. isSignedIn(true);
      })

  }

  /* Statistics. Passed to profile and Main */
  const statistics = [
    {
      label: "Applications",
      value: jobs.length,
    },
    {
      label: "Applied",
      value: jobs.filter((job) => job.status === "Applied").length,
    },
    {
      label: "Interviewing",
      value: jobs.filter((job) => job.status === "Interviewing").length,
    },
    {
      label: "Offers",
      value: jobs.filter((job) => job.status === "Offer").length,
    },
    {
      label: "Rejected",
      value: jobs.filter((job) => job.status === "Rejected").length,
    },
    {
      label: "Saved",
      value: jobs.filter((job) => job.status === "Saved").length,
    },
  ];

  return (
    <div className="app">
      <Profile
        open={sidebarOpen}
        name="Elijah"
        toggleSidebar={toggleSidebar}
        image={profileImage}
        stats={statistics}
      />

      <div className="app__main">
        <Header
          isSignedIn={isSignedIn}
          open={sidebarOpen}
          toggleSideBar={toggleSidebar}
          handleOpenSignUp={handleOpenSignUpModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                viewJob={viewJob}
                toggleModalOpen={toggleModalOpen}
                jobs={jobs}
              />
            }
          />

          {/* <section></section>
          <section></section> */}
        </Routes>
      </div>

      {/* Conditional Rendering */}
      {activeModal === "addJob" && (
        <Modal onClose={toggleModalClose} title="Add Job">
          <AddJob toggleModalClose={toggleModalClose} addJob={addJob} />
        </Modal>
      )}

      {activeModal === "jobDetails" && (
        <Modal onClose={toggleModalClose} title="Job Details">
          <JobModal
            job={selectedJob}
            handleOpenEditModal={handleOpenEditModal}
            handleDeleteJob={handleDeleteJob}
            handleEditJob={handleEditJob}
          />
        </Modal>
      )}

      {activeModal === "editJob" && (
        <Modal onClose={toggleModalClose} title="Edit Job">
          <EditModal job={selectedJob} handleEditJob={handleEditJob} />
        </Modal>
      )}

      {activeModal === "signup" && (
        <Modal onClose={toggleModalClose} title="Sign Up">
          <SignUpModal handleSignUp={handleSignUp}></SignUpModal>
        </Modal>
      )}
    </div>
  );
}

export default App;
