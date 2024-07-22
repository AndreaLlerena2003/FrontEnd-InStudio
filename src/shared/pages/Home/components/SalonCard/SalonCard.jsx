import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './SalonCard.css';
import { FaMapMarkerAlt } from "react-icons/fa";
function SalonCard(props){
    return(
        <div className="card custom-card">
            <img src={props.image} className="card-img-top"></img>
            <div className="card-body">
                <h6 className="card-title text-start">Jaguar F-Pace</h6>
                <div className='row'>
                   <div className='col-md-6 text-start'>
                        <p className='text-card'>$132<span className='text-service text-muted'>/services</span></p>
                   </div>
                   <div className='col-md-6 d-flex justify-content-md-end'> 
                            <p className='text-card mb-0 me-2'>Peru</p>
                            <FaMapMarkerAlt></FaMapMarkerAlt>                   
                    </div>
                </div>
                <a href="#" className="btn btn-primary b-card">Look Now</a>
            </div>
        </div>
    )
}

export default SalonCard;