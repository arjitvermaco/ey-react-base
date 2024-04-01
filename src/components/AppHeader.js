import "../App.css";
import orangeLogo from "../images/ohrm_branding.png";
function AppHeader() {
  return (
    <>
      <header className="appHeader">
        <img src={orangeLogo} alt="Orange HRM logo"></img>
      </header>
    </>
  );
}

export default AppHeader;
