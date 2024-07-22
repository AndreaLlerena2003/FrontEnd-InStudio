import Adv01 from '../../../../../../assets/Home_ADV_01.png';

function AdvantageCard(){
    return(
        <div className="row">
            <div className='col'>
                <img src={Adv01}></img>
            </div>
            <div className='col'>
                <div className='vstack'>
                    <h6>Titulo</h6>
                    <p>Apellido</p>
                </div>
            </div>
        </div>
    )
}

export default AdvantageCard;