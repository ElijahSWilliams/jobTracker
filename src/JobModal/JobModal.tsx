import type { Jobs } from "../Data/jobs";
import { initialJobs } from "../Data/jobs";
import "./JobModal.css";


type JobModalProps = {
    jobs: Jobs[];// pass in jobs
};

export default function JobModal({ jobs }: JobModalProps) {
    return (
        <div className="modal__container">
            <h1 className="modal__title">{jobs.company}</h1>
        </div>
    );
}