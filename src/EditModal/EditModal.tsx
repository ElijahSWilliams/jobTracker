import "./EditModal.css";
import type { Jobs, JobForm } from "../Data/jobs";
import { useState } from "react";

type EditModalProps = {
job: Jobs;
handleOpenEditModal: () => void;
handleEditJOb: (jobID: string, updatedJob: Jobs) => void;
}   



function EditModal({Job, handleEditJob}: EditModalProps) {

    


    return (
        <div className="edit__modal">
            <h1>Edit Job</h1> 
           <form className="edit__modal-form">
            <input className="edit__modal-form-input" type="text" placeholder="Company Name" value={Job.company} required onChange={(e) => {console.log("")}}></input>
            <input className="edit__modal-form-input" type="text" placeholder="Position" value={Job.position} required onChange={(e) => {console.log("")}}></input>

            <select value={Job.status} required onChange={(e) => {console.log("")}} >
                <option value="Saved">Saved</option>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
            </select>

           </form>
        </div>
    )
}

export default EditModal;