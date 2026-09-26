import { useState } from "react";
import "./ImportModal.css";

type ImportModalProps = {
    onClose: () => void;
};


export default function ImportModal({ onClose }: ImportModalProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    return (
        <div>
            <button className="" onClick={() => alert("OAuth")}></button>
            {/*  <form onSubmit={() => alert("Open")}>
                <input className="signup__modal-form-input" type="text" placeholder="email" required value={email} onChange={handleEmailChange}></input>
                <input className="signup__modal-form-input" type="password" placeholder="password" required value={password} onChange={handlePasswordChange}></input>
                <button type="submit">Import with Google Sheets</button>
            </form> */}
        </div>
    );
}