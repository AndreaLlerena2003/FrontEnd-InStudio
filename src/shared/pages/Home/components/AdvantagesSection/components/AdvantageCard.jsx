import Adv01 from '../../../../../../assets/Home_ADV_01.png';
import './AdvantageCard.css';

function AdvantageCard(){
    return(
        <div className='container-fluid' style={{width: '50rem'}}>
            <div className='row p-0 m-0'>
                <div className='col-2'>
                    <img src={Adv01} style={{width: '5rem'}}></img>
                </div>
                <div className='col-10 mt-0'>
                    <h6 className='h6-adv-card mt-1'>Best Spas in USA</h6>
                    <p className='p-adv-card'>Rent a car at our rental with an easy and fast process without disturbing your productivity</p>  
                </div>
            </div>
        </div>
    )
}
//coment dooos dd
export default AdvantageCard;