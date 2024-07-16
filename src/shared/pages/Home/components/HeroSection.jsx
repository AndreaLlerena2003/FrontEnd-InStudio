import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './HeroSection.css';
import HeroImageMobile from '../../../../assets/02_MobileLanding.png';

function HeroSection(){
    return(
        <header>
            <div className='stack-container hstack gap-0'>
                <div className='stack-class vstack gap-0 justify-content-center'>
                    <h1>We Have the Pefect Hair</h1>
                    <h1>Salon for You</h1>
                    <small className='text-body-secondary'>We have a variety of salons to meet your style needs and desires</small>
                    <div className='buttons-stack hstack gap-3 align-self-center mt-3'>
                        <button className="boton-signUp">Sign Up</button>
                        <button className="boton-signIn">Sign In</button>
                    </div>
                </div>
                <img className="hero-img" style={{ 
                        width: '50%'}}  src={HeroImageMobile}>
                </img>   
            </div>
        </header>
    )
}

export default HeroSection;