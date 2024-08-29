import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Service from '../Service/Service';

function ServiceGrid({services}){
    return(
        <div className='row mt-5'>
                {services.map((service) => (
                    <div className='col-md-4 mb-4' key={service.id}>
                        <Service image={service.image} title={service.title} description={service.description} />
                    </div>
                ))}
        </div>
       
    )
}

export default ServiceGrid;