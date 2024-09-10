import FooterSection from "../../../shared/Footer/Footer";
import Header from "../../../shared/Header/Header";
import Home from "../../pages/Home/Home";
import PreSignUp from "../../pages/PreSignUp/PreSignUp";
import Search from "../../pages/Search/Search";
import Salon from "../../pages/Salon/Salon";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import "./unauthorized.layout.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function UnauthorizedLayout() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="/salon/:id" element={<Salon />}/>
        <Route path="/preSignUp" element={<PreSignUp />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
      <FooterSection />
    </div>
  );
}
