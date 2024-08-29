import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './ServicesSection.css';
import ServiceGrid from './components/ServiceGrid/ServiceGrid';
import Haircut_IMG from '../../../../../assets/Haircut_Service.png';
import Makeup_IMG from '../../../../../assets/Makeup_Service.png';
import Nail_IMG from '../../../../../assets/Nail_Service.png';
import './ServicesSection.css';
function ServicesSection(){
    const servicesInformation = [
        {
            id: 0,
            image: Haircut_IMG,
            title: "Haircut",
            description: "We provide direct rental services when you need wherever you are. Our officers are quick to respond in carrying out this task"
        },
        {
            id: 1,
            image: Makeup_IMG,
            title: "Haircut",
            description: "We provide direct rental services when you need wherever you are. Our officers are quick to respond in carrying out this task"
        },
        {
            id: 2,
            image: Nail_IMG,
            title: "Nails",
            description: "We provide direct rental services when you need wherever you are. Our officers are quick to respond in carrying out this task"
        }
    ]
    return(
    <div className='container-fluid mt-5'>
        <div className='vstack gap-0 mt-5'>
            <h4 className='fw-normal h4-services'>Services</h4>
            <p className='fw-normal p-services'>Look up the best service for your needs</p>
        </div>
        <ServiceGrid services={servicesInformation}/>
    </div>
    )
}

export default ServicesSection;

