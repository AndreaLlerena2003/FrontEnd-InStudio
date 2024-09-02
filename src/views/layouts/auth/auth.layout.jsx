import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./auth.layout.css";
import SideNavbar from "../../../shared/SideNavbar/SideNavbar";
import { BiHome, BiStats } from "react-icons/bi";
import Analytics from "../../pages/auth/Analytics/Analytics";
import Offers from "../../pages/Offers/Offers";
export default function AuthLayout() {
  const tabsData = [
    {
      index: 0,
      icon: <BiHome />,
      label: "Información General",
      url: "auth/home",
      hidden: false,
    },
    {
      index: 1,
      icon: <BiStats />,
      label: "Servicios",
      url: "auth/analytics",
      hidden: false,
    },
  ];

  const handleLogOutInClick = () => {
    // handle logout
  };

  return (
    <div className="auth-layout">
      <SideNavbar tabsData={tabsData} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/auth/home" />} />
          <Route
            path="/home"
            element={<div>Hola como estas, di funciona</div>}
          />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/card" element={<Offers />} />
          {/* Add more Routes as needed */}
        </Routes>
      </div>
    </div>
  );
}
