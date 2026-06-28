import "./Main.css";

type MainProps = {};

function Main({ }: MainProps) {
    return (
        <div className="main">
            <h1 className="main__title">Jobs</h1>
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