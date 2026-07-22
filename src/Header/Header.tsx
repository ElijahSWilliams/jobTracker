import "./Header.css";

type HeaderProps = {
  isSignedIn: boolean;
  toggleSideBar: () => void;
  open: boolean;

  handleOpenSignUp: () => void;
};

function Header({ isSignedIn, toggleSideBar, handleOpenSignUp, open }: HeaderProps) {
  return (
    <div className="header">
      <h1 className="header__title">Job Tracker</h1>
      <button className="header__account-btn" onClick={handleOpenSignUp}>
        {isSignedIn ? "Logout" : "Sign Up"}
      </button>

      {/* Displays only on mobile */}
      <button className="header__profile_toggle" onClick={toggleSideBar}>
        {open ? "⬅" : "➡"}
      </button>
    </div>
  );
}

export default Header;
