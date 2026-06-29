import "./Profile.css"


type Stat = {
    label: string;
    value: number;
}

type ProfileProps = {
    name: string; /* Username */
    image: string; /* Profile pic */
    stats: Stat[];
};

function Profile({ name, image, stats }: ProfileProps) {
    return (
        <div className="profile">
            <button className="profile__toggle">=</button>

            <img src={image} alt={`${name}'s Profile`} className="profile__image" />
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
    );
}

export default Profile;