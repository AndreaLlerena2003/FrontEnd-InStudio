import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AdvantageCard from './AdvantageCard.jsx';

function AdvantageGrid({ advantages }) {
    return (
        <div className='row mt-5'>
            {advantages.map((advantage) => (
                <div className='col-md-6 mb-4' key={advantage.id}>
                    <AdvantageCard
                        image={advantage.image}
                        title={advantage.title}
                        description={advantage.description}
                    />
                </div>
            ))}
        </div>
    );
}

export default AdvantageGrid;