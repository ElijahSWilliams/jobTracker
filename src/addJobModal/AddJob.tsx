import "./AddJob.css";
import type { Jobs, JobForm } from "../Data/jobs";
import { useState } from "react";

type AddJobModalProps = {
    toggleModalClose: () => void;
    addJob: (job: Jobs) => void;
};


function AddJobModal({ toggleModalClose, addJob }: AddJobModalProps) {

    const [formData, setFormData] = useState<JobForm>({
        company: "",
        position: "",
        status: "Saved",
    });



    /* Functions */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newJob: Jobs = {
            id: crypto.randomUUID(),
            ...formData,
            dateAdded: new Date().toLocaleDateString(),
        }


        addJob(newJob);
        toggleModalClose();
    }



    return (
        <div className="modal__container" onClick={toggleModalClose}>

            <div className="modal" onClick={(e) => e.stopPropagation()}> {/* stopPropagation allows user to click inside modal without it closing */}
                <div className="modal__header">
                    <h1 className="modal__title">Add Job</h1>
                    <button className="modal__close" onClick={toggleModalClose}> X </button>
                </div>
                {/* FORM */}
                <form className="modal__form" onSubmit={handleSubmit}>
                    <input className="modal__form-input" type="text" placeholder="Company Name" value={formData.company} required onChange={(e) => {
                        setFormData({
                            ...formData,
                            company: e.target.value,
                        })
                    }}></input>
                    <input className="modal__form-input" type="text" placeholder="Position" value={formData.position} required onChange={(e) => {
                        setFormData({
                            ...formData,
                            position: e.target.value,
                        })
                    }}></input>

                    <select value={formData.status} required onChange={(e) => (
                        setFormData({
                            ...formData,
                            status: e.target.value as JobForm["status"],
                        })
                    )} >
                        <option>Saved</option>
                        <option>Applied</option>
                        <option>Interviewing</option>
                        <option>Offer</option>
                        <option>Rejected</option>
                    </select>

                    <button type="submit" className="modal__form-submit" >Add</button>
                </form >
            </div>

        </div>
    );
}

export default AddJobModal;