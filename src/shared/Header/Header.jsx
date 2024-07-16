import LogoInStudio from '../../assets/LogoInStudio.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header(){
    const location = useLocation();
    return(
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className='container-fluid'>
            <a className="navbar-brand" href="#">
             <img src={LogoInStudio} alt="Logo" width="50" height="50" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0 color-items'> 
                    <li className={`nav-item ${location.pathname === '/home' ? 'active' : ''}`}> 
                        <Link to="/home" className="nav-link color-items" aria-current={location.pathname === '/home' ? 'page' : undefined}>Home</Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/terms' ? 'active' : ''}`}> 
                        <Link to="/terms" className="nav-link color-items" aria-current={location.pathname === '/terms' ? 'page' : undefined}>Terms & Conditions</Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                        <Link to="/contact" className="nav-link color-items" aria-current={location.pathname === '/contact' ? 'page' : undefined}>Contact Us</Link>
                    </li>
                </ul>
            </div>
         </div>
       </nav>
    )
}

export default Header;