import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './SalonCard.css';
import { FaMapMarkerAlt } from "react-icons/fa";
function SalonCard(props){
    return(
        <div className="card" style={{width: "26%"}}>
            <img src={props.image} className="card-img-top"></img>
            <div className="card-body">
                <h6 className="card-title text-start">Jaguar F-Pace</h6>
                <div className='row'>
                   <div className='col-6 text-start'>
                        <p className='text-card'>$132<span className='text-service text-muted'>/services</span></p>
                   </div>
                   <div className='col-6'> 
                        <div className='row g-1'>
                            <div className='col-10 text-end'>
                                <p className='text-card '>Peru</p>
                            </div>
                            <div className='col-2'>
                                <FaMapMarkerAlt className='mb-2'></FaMapMarkerAlt>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn btn-primary b-card">Book Now</a>
            </div>
        </div>
    )
}

export default SalonCard;