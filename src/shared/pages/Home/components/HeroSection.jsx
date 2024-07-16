import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroImage from '../../../../assets/01_LandingPage.png';
import './HeroSection.css';
function HeroSection(){
    return(
        <header>
            <div className='hstack gap-0'>
                <div className='stack-class vstack gap-0 justify-content-center'>
                    <h1>We Have the Pefect Hair</h1>
                    <h1>Salon for You</h1>
                    <small className='text-body-secondary'>We have a variety of salons to meet your style needs and desires</small>
                    <div className='buttons-stack hstack gap-3 align-self-center mt-3'>
                        <button className="boton" style={{color: 'white', border: 'white',height:'3rem', width: '5rem'}}>Sign Up</button>
                        <button className="boton" style={{color: 'white', border: 'white',height:'3rem', width: '5rem'}}>Sign In</button>
                    </div>
                </div>
                <img className="hero-img" style={{ 
                        width: '50%', 
                        marginTop:'1.2%'}}  src={HeroImage}>
                </img>   
            </div>
        </header>
    )
}

export default HeroSection;