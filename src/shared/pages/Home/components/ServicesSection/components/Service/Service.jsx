import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HaircutImage from '../../../../../../../assets/Haircut_Service.png';

function Service({image,title,description}){
    return(
        <div className='card custom-card-service'>
             <img src={image} class="card-img-top mx-auto d-block mb-2" style={{width: '5rem',height:'5rem'} }alt="..."/>
             <div className='card-body'>
                <h5 class="card-title title-service">{title}</h5>
                <p class="card-text text-service">{description}</p>
                <hr className='hr-service'/>
             </div>
        </div>
    )
}

export default Service;