import type { Jobs } from "../Data/jobs";
import "./JobModal.css";


type JobModalProps = {
    job: Jobs;
};

export default function JobModal({ job }: JobModalProps) {
    return (
        <div className="modal__container">
            <div className="modal">
                <h1 className="modal__title">{job.company}</h1>
                <p>{job.position}</p>
                <p>{job.dateAdded}</p>
            </div>
        </div>
    );
}