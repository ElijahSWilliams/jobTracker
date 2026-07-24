import "./LoginModal.css";  
import { useState } from "react";

type LoginModalProps = {
    handleLogin: (userData) => void;
    toggleCloseModal: () => void;
} 


export default function LoginModal({ handleLogin, toggleCloseModal }: LoginModalProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
}


    return (
         <div className="signup">
            <form onSubmit={handleSubmitLogin}>
               
                <input className="signup__modal-form-input" type="text" placeholder="email" required value={email} onChange={handleEmailChange}></input>
                <input className="signup__modal-form-input" type="password" placeholder="password" required value={password} onChange={handlePasswordChange}></input>
                <button type="submit">Login</button>
            </form>
        </div >
    )
}
