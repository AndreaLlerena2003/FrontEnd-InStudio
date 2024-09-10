import { NavLink } from "react-router-dom";
import "./SideNavbar.css"; // Import CSS for styling
import LogoInStudio from "../../assets/LogoInStudio2.png";
import { BiLogOut } from "react-icons/bi";

export default function SideNavbar({ tabsData }) {
  return (
    <div className="side-navbar">
      <div className="navbar-logo">
        <img src={LogoInStudio}></img>
        <span>InStudio</span>
      </div>
      <p className="divider">GENERAL</p>
      <ul className="navbar-list">
        {tabsData.map((tab, index) => (
          <li key={index} className="navbar-item">
            <NavLink to={`/${tab.url}`} className="navbar-link">
              {tab.icon}
              <span>{tab.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="logout-section">
        <li className="out">
          <NavLink to={`/`} className="navbar-link">
            <BiLogOut className="outIcon"/>
            <span>Cerrar Sesión</span>
          </NavLink>
        </li>
      </div>
    </div>
  );
}
