import "./Header.css";

type HeaderProps = {};

function Header({}: HeaderProps) {
  return (
    <div className="header">
      <h1 className="header__title">Job Tracker</h1>
      <button className="header__account-btn">Login /Logout</button>
    </div>
  );
}

export default Header;
