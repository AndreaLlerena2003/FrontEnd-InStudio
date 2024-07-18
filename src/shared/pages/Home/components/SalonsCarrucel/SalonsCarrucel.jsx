import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SalonCard from '../SalonCard/SalonCard';
function SalonCarrucel(props){
    return(
        <div className='container text-center'>
            <div className='row'>
                <div className='col-4'>
                    <SalonCard/>
                </div>
            </div>
        </div>
    )
}