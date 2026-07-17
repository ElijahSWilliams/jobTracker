import "./Header.css";

type HeaderProps = {};

function Header({ }: HeaderProps) {
    return (
        <div className="header">
            <div className="header__nav">
                <h1 className="header__title">Job Tracker</h1>
                <button className="header__account-btn">Login /Logout</button>
            </div>
        </div>
    );
}

export default Header;