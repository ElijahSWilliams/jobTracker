import type { Jobs } from "../Data/jobs";
import "./JobModal.css";


type JobModalProps = {
    job: Jobs;
};

export default function JobModal({ job }: JobModalProps) {
    console.log(job)
    return (
        <div className="job__modal">
            <h1>{job.company}</h1>
            <p>{job.position}</p>
            <p>Applied on: {job.dateAdded}</p>
            <p>{job.status}</p>
        </div>

    );
}