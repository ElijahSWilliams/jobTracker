import type { Jobs } from "../Data/jobs";
import "./JobModal.css";


type JobModalProps = {
    job: Jobs; 
    handleDeleteJob: (jobID: string) => void;
};

export default function JobModal({ job, handleDeleteJob }: JobModalProps) {




    return (
        <div className="job__modal">
            <div className="job__modal-btns">
                <button className="job__modal-edit-btn">Edit </button>
                <button className="job__modal-delete-btn" onClick={() => handleDeleteJob(job.id)}> Delete</button>
            </div>

            <h1>{job.company}</h1>
            <p>{job.position}</p>
            <p>Applied on: {job.dateAdded}</p>
            <p>{job.status}</p>
        </div>

    );
}