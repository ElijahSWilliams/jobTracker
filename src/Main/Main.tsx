import "./Main.css";

/* PLACEHOLDER STATS */
const stats = [
    { label: "Saved", value: 12 },
    { label: "Applied", value: 38 },
    { label: "In Progress", value: 6 },
    { label: "Rejected", value: 19 },
    { label: "Accepted", value: 1 },
];




type MainProps = {};

function Main({ }: MainProps) {

    return (
        <div className="main">
            <div className="main__header">
                <h1 className="main__title">Stats</h1>
                <button className="main__add-button">+ Add Job</button>
            </div>



            {/* Boxes */}
            <div className="main__container">
                <div className="main__box">Saved</div>
                <div className="main__box">Applied</div>
                <div className="main__box">In Progress</div>
                <div className="main__box">Rejected</div>
                <div className="main__box">Accepted</div>
            </div>
        </div>
    );
}

export default Main;