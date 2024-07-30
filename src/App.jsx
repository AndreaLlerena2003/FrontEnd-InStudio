import './App.css';
import { BrowserRouter as Router,  Routes, Route , Navigate } from 'react-router-dom';
import Header from './shared/Header/Header';
import Home from './shared/pages/Home/Home';
import FooterSection from './shared/Footer/Footer';
import SignUp from './user/pages/SignUp/SignUp';
import SignIn from './user/pages/SignIn/SignIn';
import PreSignUp from './user/pages/PreSignUp/PreSignUp.jsx';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/preSignUp" element={<PreSignUp/>}/>

          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
        </Routes>
        <FooterSection/>
      </div>
    </Router>
  );
}

export default App;
