import "./Header.css"; 
import { useContext } from "react";
import { CurrentUserContext } from "../Context/Context.js";

type HeaderProps = {
 
  toggleSideBar: () => void;
  open: boolean;

  handleOpenSignUp: () => void;
};

function Header({  toggleSideBar, handleOpenSignUp, open }: HeaderProps) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext); 

const handleAuthButtonCLick = () => {
  if (currentUser) {
    //logout user
    setCurrentUser(null);
    localStorage.removeItem("jwt");
    localStorage.removeItem("currentUser");
    window.location.reload();
  } else {
    //open signUp Modal
    handleOpenSignUp(); 
 } //end else
}//end button click function

  return (
    <div className="header">
      <h1 className="header__title">Job Tracker</h1>
      <button className="header__account-btn" onClick={handleAuthButtonCLick}>
        {currentUser ? "Logout" : "Sign Up"}
      </button>

      {/* Displays only on mobile */}
      <button className="header__profile_toggle" onClick={toggleSideBar}>
        {open ? "⬅" : "➡"}
      </button>
    </div>
  );
}

export default Header;
