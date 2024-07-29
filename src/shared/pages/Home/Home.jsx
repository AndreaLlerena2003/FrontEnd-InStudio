import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import SectionRow from './components/SectionRow/SectionRow.jsx';
import SalonCard from './components/SalonCard/SalonCard.jsx';
import SpaAsset from '../../../assets/Salon2.jpg';
import React from 'react';
import SalonCarrucel from './components/SalonsCarrucel/SalonsCarrucel.jsx';
import ServicesSection from './components/ServicesSection/ServicesSection.jsx';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection.jsx';
import './Home.css';
function Home(){

    const salons = [
        {image: SpaAsset,name: "Spa Caminos",precio: "20$",pais: "Peru"},
        {image: SpaAsset,name: "Spa Caminos",precio: "20$",pais: "Peru"},
        {image: SpaAsset,name: "Spa Caminos",precio: "20$",pais: "Peru"},
        {image: SpaAsset,name: "Spa Caminos",precio: "20$",pais: "Peru"}
    ];
    return(
        <div className='container-fluid ml-5 overflow-x: hidden Home'>
            <HeroSection/>
            <SectionRow/>
            <SalonCarrucel/>
            <ServicesSection/>
            <AdvantagesSection></AdvantagesSection>
        </div>
    )
}

export default Home;