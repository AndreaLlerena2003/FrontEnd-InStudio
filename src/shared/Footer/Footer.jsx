import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../../assets/LogoInStudio.png';

function Footer(){
    return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={Logo} width="50" height="50"></img>
                    </div>
                </div>
            </div>
    )
}

export default Footer;