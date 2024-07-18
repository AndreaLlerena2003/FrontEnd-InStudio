import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SalonCard from '../SalonCard/SalonCard';
import SpaAsset from '../../../../../assets/Spa_Asset.png';
function SalonCarrucel(props){
    return(
        <div className='container text-center mt-2'>
            <div className='row'>
                <div className='col-md-4 col-xs-12 mb-3'>
                    <SalonCard image={SpaAsset}/>
                </div>
                <div className='col-md-4 col-xs-12 mb-3'>
                    <SalonCard image={SpaAsset}/>
                </div>
                <div className='col-md-4 col-xs-12 mb-3'>
                    <SalonCard image={SpaAsset}/>
                </div>
            </div>
        </div>
    )
}

export default SalonCarrucel;