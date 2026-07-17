import "./Header.css";

type HeaderProps = {
  isSignedIn: boolean;
};

function Header({ isSignedIn }: HeaderProps) {
  return (
    <div className="header">
      <h1 className="header__title">Job Tracker</h1>
      <button className="header__account-btn">
        {isSignedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Header;
