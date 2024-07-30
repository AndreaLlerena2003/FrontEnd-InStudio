import './App.css';
import { BrowserRouter as Router,  Routes, Route , Navigate } from 'react-router-dom';
import Header from './shared/Header/Header';
import Home from './shared/pages/Home/Home';
import FooterSection from './shared/Footer/Footer';
import SignUp from './user/SignUp';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/signUp" element={<SignUp/>}/>
        </Routes>
        <FooterSection/>
      </div>
    </Router>
  );
}

export default App;
