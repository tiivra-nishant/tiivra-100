import "./FixedNavbar.css";
import tiivraLogo from "./assets/tiivra-logo-min-padding.png";

const FixedNavbar = () => {
  return (
    <div className="fixed-navbar">
      <div className="fixed-navbar-parent">
        <div className="fixed-navbar-logo">
          <img
            src={tiivraLogo}
            alt="Placeholder for Logo"
            className="fixed-navbar-image"
          />
        </div>
        <ul className="fixed-navbar-items">
          <li className="fixed-navbar-item">
            <a className="fixed-navbar-link" href="https://www.tiivra.com">
              Dashboard
              <span className="coming-soon-notice">Coming soon</span>
            </a>
          </li>
          <li className="fixed-navbar-item" style={{ display: "none" }}>
            <a className="fixed-navbar-link" href="https://www.tiivra.com">
              Profile
            </a>
          </li>
          <li className="fixed-navbar-item" style={{ display: "none" }}>
            <a className="fixed-navbar-link" href="https://www.tiivra.com">
              Tiivra
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FixedNavbar;
