import LogoInStudio from '../../assets/LogoInStudio.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';
function Header(){
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
                    <li className='nav-item'> 
                        <a className='nav-link color-items'>About</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link color-items" aria-current="page" href="#">Become Partner</a>
                    </li>
                    <li className='nav-item'> 
                        <a className='nav-link color-items'>Terms & Conditions</a>
                    </li>
                    <li>
                        <a className='nav-link color-items'>Contact Us</a>
                    </li>
                </ul>
            </div>
         </div>
       </nav>
    )
}

export default Header;