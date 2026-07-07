import "./AddJobModal.css"; 
import type { JobForm } from "../Data/jobs";

type AddJobModalProps = {
    toggleModalClose: () => void; 
}; 

const [formData, setFormData] = useState<JobForm>({
    company: "",
    position: "",
    status: "Saved",
});

function AddJobModal({ toggleModalClose }: AddJobModalProps) {
    return (
        <div className="modal__container" onClick={toggleModalClose}>

            <div className="modal" onClick={(e) => e.stopPropagation()}> {/* stopPropagation allows user to click inside modal without it closing */}
                <div className="modal__header">
                    <h1 className="modal__title">Add Job</h1>
                    <button className="modal__close" onClick={toggleModalClose}> X </button>
                </div>
                {/* FORM */}
                <form className="modal__form">
                    <input className="modal__form-input" type="text" placeholder="Company Name"></input>
                    <input className="modal__form-input" type="text" placeholder="Position"></input>
                    <select>
                        <option>Applied</option>
                        <option>Interview</option>
                        <option>Offer</option>
                        <option>Rejected</option>
                    </select>

                    <button type="submit" className="modal__form-submit">Add</button>
                </form>
            </div>

        </div>
    );
}

export default AddJobModal;