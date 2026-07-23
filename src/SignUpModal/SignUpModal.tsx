import "./SignUpModal.css";
import { useState } from "react";

type SignUpModalProps = {
    handleSignUp: (userData) => void; 
    toggleCloseModal: () => void;
};

export default function SignUpModal({ handleSignUp, toggleCloseModal }: SignUpModalProps) {
    /* State */
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => setName(e.target.value)
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password)

        //make api call  
        handleSignUp({ name, email, password })
        toggleCloseModal();
    }


    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <input className="signup__modal-form-input" type="text" placeholder="username" value={name} onChange={handleNameChange}></input>
                <input className="signup__modal-form-input" type="text" placeholder="email" value={email} onChange={handleEmailChange}></input>
                <input className="signup__modal-form-input" type="password" placeholder="password" value={password} onChange={handlePasswordChange}></input>
                <button type="submit">Sign Up</button>
            </form>
        </div >
    );
}