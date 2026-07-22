import "./EditModal.css";
import type { Jobs, JobForm } from "../Constants/Constants";
import { useState } from "react";
import type { SyntheticEvent } from "react";

type EditModalProps = {
    job: Jobs;
    handleEditJob: (jobID: string, updatedJob: Jobs) => void;
}

function EditModal({ job, handleEditJob }: EditModalProps) {

    /* State */
    const [formData, setFormData] = useState<JobForm>({
        company: job.company,
        position: job.position,
        status: job.status,
    });


    function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault()

        const updatedJob: Jobs = {
            ...job,
            ...formData,
        };

        handleEditJob(job.id, updatedJob);
    }



    return (
        <div className="edit__modal">

            <form className="edit__modal-form" onSubmit={handleSubmit}>
                <input className="edit__modal-form-input" type="text" placeholder="Company Name" value={formData.company} required onChange={(e) => setFormData({
                    ...formData,
                    company: e.target.value,
                })}></input>
                <input className="edit__modal-form-input" type="text" placeholder="Position" value={formData.position} required onChange={(e) => setFormData({
                    ...formData,
                    position: e.target.value
                }
                )}></input>

                <select value={formData.status} required onChange={(e) => {
                    setFormData({
                        ...formData,
                        status: e.target.value,
                    })
                }} >
                    <option value="Saved">Saved</option>
                    <option value="Applied">Applied</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>


                <button className="edit__modal-button">Submit</button>
            </form>
        </div>
    )
}
export default EditModal;