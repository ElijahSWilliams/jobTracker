import { useState } from "react";
import "./Profile.css"


type Stat = {
    label: string;
    value: number;
}

type ProfileProps = {
    name: string; /* Username */
    image: string; /* Profile pic */
    open: boolean;
    toggleSidebar: () => void;
    stats: Stat[];
};

function Profile({ open, name, image, toggleSidebar, stats }: ProfileProps) {
    const [profileImage, setProfileImage] = useState(image);



    /* FUNCTIONS */
    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]; //loof for files in event object and grab first one

        if (!file) return; //if no file, exit

        const url = URL.createObjectURL(file); //create URL with react keywords??

        setProfileImage(url); //set image to url

    }



    return (

        <aside className={`profile ${open ? "profile-open" : "profile-closed"}`}>
            <button className="profile__toggle" onClick={toggleSidebar}>x</button>
            <div className="profile__content">

                <label className="profile__image-wrapper">
                    <img src={image} alt={`${name}'s Profile`} className="profile__image" />
                    <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                </label>

                {/* DISPLAY USER NAME */}
                <h1 className="profile__name">
                    Hello, <br></br>  {name}!
                </h1>


                {/*  */}
                <div className="profile__stats">
                    {stats.map((stat) => (
                        <div className="profile__stat" key={stat.label}>
                            <p>{stat.label}</p>
                            <p>{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default Profile;