import FooterSection from "../../../shared/Footer/Footer";
import Header from "../../../shared/Header/Header";
import Home from "../../pages/Home/Home";
import PreSignUp from "../../pages/PreSignUp/PreSignUp";
import Search from "../../pages/Search/Search";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import ClientOffers from "../../pages/Offers/Client/OffersClient.jsx";

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
        {/* <Route path="/salon/:id" element={<Salon />}/> CUANDO SE DE CLICK EN UN ITEM DEL RESULTADO DE BÚSQUEDA, PARA MOSTRAR EL DETALLE DE UN SALÓN */}
        <Route path="/preSignUp" element={<PreSignUp />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/offers" element={<ClientOffers />} />

      </Routes>
      <FooterSection />
    </div>
  );
}
