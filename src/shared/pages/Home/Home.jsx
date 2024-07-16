import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import SectionRow from './components/SectionRow/SectionRow.jsx';
import React from 'react';

function Home(){
    return(
        <React.Fragment>
            <HeroSection/>
            <SectionRow/>
        </React.Fragment>
    )
}

export default Home;