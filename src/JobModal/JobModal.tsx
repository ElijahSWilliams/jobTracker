import type { Jobs } from "../Constants/Constants";
import "./JobModal.css";


type JobModalProps = {
    job: Jobs;
    handleDeleteJob: (jobID: string) => void;
    handleOpenEditModal: () => void;
    handleEditJob: (jobID: string, updatedJob: Jobs) => void;

};

export default function JobModal({ job, handleDeleteJob, handleOpenEditModal, handleEditJob }: JobModalProps) {




    return (
        <div className="job__modal">
            <div className="job__modal-btns">
                <button className="job__modal-edit-btn" onClick={handleOpenEditModal}>Edit</button>
                <button className="job__modal-delete-btn" onClick={() => handleDeleteJob(job.id)}> Delete</button>
            </div>

            <h1>{job.company}</h1>
            <p>{job.position}</p>
            <p>Applied on: {job.dateAdded}</p>
            <p>{job.status}</p>
        </div>

    );
}