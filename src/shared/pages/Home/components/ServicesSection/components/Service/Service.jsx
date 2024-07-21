import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HaircutImage from '../../../../../../../assets/Haircut_Service.png';

function Service(){
    return(
        <div className='card custom-card-service'>
             <img src={HaircutImage} class="card-img-top" alt="..."/>
             <div className='card-body'>
                <h5 class="card-title">Haircut</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
        </div>
    )
}

export default Service;