import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomeADV1 from '../../../../../assets/Home_ADV_01.png';
import HomeADV2 from '../../../../../assets/Home_ADV_2.png';
import HomeADV3 from '../../../../../assets/Home_ADV_3.png';
import HomeADV4 from '../../../../../assets/Home_ADV_04.png';
import AdvantageGrid from './components/AdvantageGrid';
import './AdvantagesSection.css';
const AdvantageInformation = [
    {
        id: 0,
        image: HomeADV1,
        title: "Best Spas in USA",
        description: "Rent a car at our rental with an easy and fast process without disturbing your productivity"
    },
    {
        id: 1,
        image: HomeADV2,
        title: "Best Spas in USA",
        description: "Rent a car at our rental with an easy and fast process without disturbing your productivity"
    },
    {
        id: 2,
        image: HomeADV3,
        title: "Best Spas in USA",
        description: "Rent a car at our rental with an easy and fast process without disturbing your productivity"
    },
    {
        id: 3,
        image: HomeADV4,
        title: "Best Spas in USA",
        description: "Rent a car at our rental with an easy and fast process without disturbing your productivity"
    }
   
]
function AdvantagesSection(){
    return(
      <div className='container d-flex justify-content-center'>
        <AdvantageGrid advantages={AdvantageInformation}/>
      </div>
    )
}

export default AdvantagesSection;