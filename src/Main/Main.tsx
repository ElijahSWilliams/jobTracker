import type { Jobs } from "../Utils/Constants";
import "./Main.css";
import { CurrentUserContext } from "../Context/Context.js"
import { useContext, useState } from "react"

/* PLACEHOLDER STATS */

type MainProps = {
    toggleModalOpen: () => void;
    viewJob: (job: Jobs) => void;
    jobs: Jobs[];
};

function Main({ toggleModalOpen, viewJob, jobs }: MainProps) {
    /* State */
    const [filter, setFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const { currentUser } = useContext(CurrentUserContext)


    /* Manually filtered Jobs */
    const appliedJobs = jobs.filter(job => job.status === "Applied");
    const interviewJobs = jobs.filter(job => job.status === "Interviewing");
    const offerJobs = jobs.filter(job => job.status === "Offer");
    const rejectedJobs = jobs.filter(job => job.status === "Rejected");
    const savedJobs = jobs.filter(job => job.status === "Saved")

    /* Job filtering Object */

    const jobFilters = {
        All: jobs,
        Saved: savedJobs,
        Applied: appliedJobs,
        Interviewing: interviewJobs,
        Offer: offerJobs,
        Rejected: rejectedJobs
    }

    /* Render Jobs */
    const jobsToRender = jobFilters[filter] /* filter is state */
    console.log(jobsToRender)
    console.log(filter)
    const filteredJobsToRender = jobsToRender.filter((job) => {
        const search = searchTerm.toLowerCase(); //make searchTerm lowercase

        return (job.company.toLowerCase().includes(search) || job.position.toLowerCase().includes(search) || job.status.toLowerCase().includes(search)) //return jobs whose position or company match search.
    })

    return (
        <div className="main">
            <div className="main__header">
                {/* <h1 className="main__title">Stats</h1> */}
                <button onClick={toggleModalOpen} className={currentUser ? "main__add-button" : "main__add-button-hide"}> + Add Job</button>
                <button onClick={toggleModalOpen} className={currentUser ? "main__add-button" : "main__add-button-hide"}> + Import</button>
                {/* Dropdown filter */}
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className={currentUser ? "main__filter-menu" : "main__add-button-hide"}>
                    <option value="All">All</option>
                    <option value="Saved" >Saved</option>
                    <option value="Applied">Applied</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>
                {/* Search Filter */}
                <input type="text" placeholder="Search by Position, Company, or Status" onChange={(e) => setSearchTerm(e.target.value)} className={currentUser ? "main__search" : "main__add-button-hide"} value={searchTerm}></input>
            </div>

            {/* Boxes */}
            <div className="main__container">
                <div>
                    {filteredJobsToRender.map((job) => (
                        <button key={job.id} className="main__box-card" onClick={() => viewJob(job)}>
                            <h3 className="main__box-header">{job.company}</h3>
                            <p className="main__box-card-title">{job.position}</p>
                            <p className="main__box-card-date">Date Added: {job.dateAdded}</p>
                            <p className="main__box-card-title">Status: {job.status}</p>
                        </button>
                    ))
                    }
                </div>

                {/* <div className="main__box">
                    <h2 className="main__box_header">Saved</h2>

                    {savedJobs.map(job => (
                        <button key={job.id} className="main__box-card" onClick={() => viewJob(job)}>
                            <h3> {job.company}</h3>
                            <p className="main__box-card-title">{job.position}</p>
                            <p className="main__box-card-date">Date Added: {job.dateAdded}</p>
                        </button>
                    ))}
                </div>

                <div className="main__box">
                    <h2 className="main__box_header">Applied</h2>
                    {appliedJobs.map(job => (
                        <button key={job.id} className="main__box-card" onClick={() => viewJob(job)}>
                            <h3 className="main__box-card-title"> {job.company}</h3>
                            <p className="">{job.position} </p>
                            <p className="main__box-card-date">Date Added: {job.dateAdded}</p>
                        </button>
                    ))}
                </div>

                <div className="main__box">
                    <h2 className="main__box_header">Interviewing</h2>
                    {interviewJobs.map(job => (
                        <button key={job.id} className="main__box-card" onClick={() => viewJob(job)}>
                            <h3 className="main__box-card-title"> {job.company} </h3>
                            <p className="">{job.position} </p>
                            <p className="main__box-card-date">Date Added: {job.dateAdded}</p>
                        </button>
                    ))}
                </div>

                <div className="main__box">
                    <h2 className="main__box_header">Offer</h2>
                    {offerJobs.map(job => (
                        <button key={job.id} className="main__box-card" onClick={() => viewJob(job)}>
                            <h3 className=""> {job.company} </h3>
                            <p className=""> {job.position} </p>
                            <p className="main__box-card-date">Date Added: {job.dateAdded}</p>
                        </button>
                    ))}
                </div>

                <div className="main__box">
                    <h2 className="main__box_header">Rejected</h2>
                    {rejectedJobs.map(job => (
                        <button key={job.id} className="main__box-card" onClick={() => viewJob(job)}>
                            <h3 className=" ">{job.company}</h3>
                            <p className=""> {job.position}</p>
                            <p className="main__box-card-date">Date Added: {job.dateAdded}</p>
                        </button>
                    ))}
                </div> */}

            </div> {/* End Main Dashboard */}
        </div>
    );
}

export default Main;