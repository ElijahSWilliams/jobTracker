import { useState, useContext } from "react";
import { CurrentUserContext } from "../Context/Context.js";
import { updateName } from "../Utils/Auth.js"

type EditProfileModalProps = {};

export default function EditProfileModal({ }: EditProfileModalProps) {

    /* Get currentUser */
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

    /* State */
    const [name, setName] = useState(currentUser.name); //set state to currentUser name



    const handleNameChange = (e) => setName(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();

        //get token 
        const token = localStorage.getItem("jwt")
        //make api call
        updateName(name, token)
            .then((res) => {
                setCurrentUser(res)
                console.log(currentUser.name)
            })
            .catch((err) => {
                console.error(err)
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="signup__modal-form-input" type="text" placeholder={name} value={name} required onChange={handleNameChange}></input>
                <button type="submit">Confirm</button>
            </form>
        </div>
    );
}