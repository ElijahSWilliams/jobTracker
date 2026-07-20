import "./SignUpModal.css";
import { useState } from "react";

type SignUpModalProps = {};

export default function SignUpModal({ }: SignUpModalProps) {
    /* State */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="signup">

            <form>
                <input type="text" placeholder="email" onChange={(e) => setEmail()}></input>
                <input type="text" placeholder="password"></input>
            </form>
        </div >
    );
}