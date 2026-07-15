import "./EditModal.css";
import type { Jobs, JobForm } from "../Data/jobs";
import { useState } from "react";

type EditModalProps = {
job: Jobs;
handleEditJob: (jobID: string, updatedJob: Jobs) => void;
}   





function EditModal({job, handleEditJob}: EditModalProps) {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedJob: JobForm = {
            company: formData.get("company") as string,
            position: formData.get("position") as string,
            status: formData.get("status") as string,
            dateAdded: job.dateAdded
        };
        handleEditJob(job.id, updatedJob as Jobs);
    }


    return (
        <div className="edit__modal">
           
           <form className="edit__modal-form">
            <input className="edit__modal-form-input" type="text" placeholder="Company Name" value={job.company} required onChange={(e) => {console.log("")}}></input>
            <input className="edit__modal-form-input" type="text" placeholder="Position" value={job.position} required onChange={(e) => {console.log("")}}></input>

            <select value={job.status} required onChange={(e) => {console.log("")}} >
                <option value="Saved">Saved</option>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
            </select>


            <button className="edit__modal-form-submit" type="submit" onClick={handleSubmit}>Save Changes</button>
           </form>
        </div>
    )
}
   

export default EditModal;