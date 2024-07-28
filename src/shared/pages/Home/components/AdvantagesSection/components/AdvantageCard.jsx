import Adv01 from '../../../../../../assets/Home_ADV_01.png';
import './AdvantageCard.css';
function AdvantageCard({ image, title, description }) {
    return (
      
            <div className='row p-0 m-0 justify-content-center' style={{ maxWidth: '50rem' }}>
                <div className='col-2 d-flex justify-content-center align-items-center'>
                    <img src={image} style={{ width: '5rem', height: 'auto' }} alt="Advantage" />
                </div>
                <div className='col-10 mt-0 text-cont-card-adv mt-2'>
                    <div className='vstack d-flex justify-content-start'>
                        <h6 className='h6-adv-card mt-1'>{title}</h6>
                        <p className='p-adv-card'>{description}</p>
                    </div>
                </div>
            </div>
    )
}

export default AdvantageCard;