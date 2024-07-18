import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import SectionRow from './components/SectionRow/SectionRow.jsx';
import SalonCard from './components/SalonCard/SalonCard.jsx';
import SpaAsset from '../../../assets/Spa_Asset.png';
import React from 'react';

function Home(){
    return(
        <React.Fragment>
            <HeroSection/>
            <SectionRow/>
            <SalonCard image={SpaAsset}/>
        </React.Fragment>
    )
}

export default Home;