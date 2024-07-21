import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './ServicesSection.css';
import Service from './components/Service/Service';
function ServicesSection(){
    return(
        <Service />
    )
}

export default ServicesSection;

//head
/*
 <div className='vstack gap-0 mt-5'>
            <h4 className='fw-normal h4-services'>Services</h4>
            <p className='fw-normal p-services'>Our service is not only renting a car, but we also provide a private chauffeur service that can guide you on your trip and also longtrip packages to support your travel needs.</p>
        </div>
*/
