import { useState } from "react";

type EditProfileModalProps = {};

export default function EditProfileModal({ }: EditProfileModalProps) {
    /* State */
    const [name, setName] = useState();


    const handleNameChange = (e) => setName(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();



    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="signup__modal-form-input" type="text" placeholder="username" required value={name} onChange={handleNameChange}></input>
                <button type="submit">Confirm</button>
            </form>
        </div>
    );
}