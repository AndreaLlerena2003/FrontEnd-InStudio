import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import SectionRow from './components/SectionRow/SectionRow.jsx';
import SalonCard from './components/SalonCard/SalonCard.jsx';
import SpaAsset from '../../../assets/Spa_Asset.png';
import React from 'react';
import SalonCarrucel from './components/SalonsCarrucel/SalonsCarrucel.jsx';
import ServicesSection from './components/ServicesSection/ServicesSection.jsx';
function Home(){
   
    const salons = [
        {image: SpaAsset,name: "Spa Caminos",precio: "20$",pais: "Peru"},
        {image: SpaAsset,name: "Spa Caminos",precio: "20$",pais: "Peru"},
        {image: SpaAsset,name: "Spa Caminos",precio: "20$",pais: "Peru"},
        {image: SpaAsset,name: "Spa Caminos",precio: "20$",pais: "Peru"}
    ];
    return(
        <React.Fragment>
            <HeroSection/>
            <SectionRow/>
            <SalonCarrucel/>
            <ServicesSection/>
        </React.Fragment>
    )
}

export default Home;