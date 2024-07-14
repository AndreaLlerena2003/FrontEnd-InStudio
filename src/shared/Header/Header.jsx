import LogoInStudio from '../../assets/LogoInStudio.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaBars,FaTimes} from 'react-icons/fa';
function Header(){
    return(
       <header>
            <h3>Logo</h3>
            <nav>
                <a href='/#'>Home</a>
                <a href='/#'>Home</a>
                <a href='/#'>Home</a>
                <button>
                    <FaTimes/>
                </button>
            </nav>
            <button>
                <FaBars/>
            </button>
       </header>
    )
}

export default Header;