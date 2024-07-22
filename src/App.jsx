import './App.css';
import { BrowserRouter as Router,  Routes, Route , Navigate } from 'react-router-dom';
import Header from './shared/Header/Header';
import Home from './shared/pages/Home/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
