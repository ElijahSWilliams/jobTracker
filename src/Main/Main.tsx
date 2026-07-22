import type { Jobs } from "../Utils/Constants";
import "./Main.css";

/* PLACEHOLDER STATS */

type MainProps = {
    toggleModalOpen: () => void;
    viewJob: (job: Jobs) => void;
    jobs: Jobs[];
};

function Main({ toggleModalOpen, viewJob, jobs }: MainProps) {

    const appliedJobs = jobs.filter(job => job.status === "Applied");
    const interviewJobs = jobs.filter(job => job.status === "Interviewing");
    const offerJobs = jobs.filter(job => job.status === "Offer");
    const rejectedJobs = jobs.filter(job => job.status === "Rejected");
    const savedJobs = jobs.filter(job => job.status === "Saved")


    console.log(savedJobs[0].dateAdded);
    return (
        <div className="main">
            <div className="main__header">
                <h1 className="main__title">Stats</h1>
                <button onClick={toggleModalOpen} className="main__add-button"> + Add Job</button>
            </div>

            {/* Boxes */}
            <div className="main__container">

                <div className="main__box">
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
                </div>

            </div>
        </div>
    );
}

export default Main;