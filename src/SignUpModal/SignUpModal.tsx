import "./SignUpModal.css";
import { useState } from "react";

type SignUpModalProps = {};

export default function SignUpModal({ }: SignUpModalProps) {
    /* State */
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(e)

        //make api call 

    }


    return (
        <div className="signup">

            <form onSubmit={(e) => handleSignUp(e)}>
                <input type="text" placeholder="username" value={name} onChange={(e) => setName(e.currentTarget.value)}></input>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}></input>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}></input>
                <button type="submit">Sign Up</button>
            </form>
        </div >
    );
}