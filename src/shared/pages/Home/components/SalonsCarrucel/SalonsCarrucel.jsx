import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SalonCard from '../SalonCard/SalonCard';
import SpaAsset from '../../../../../assets/Spa_Asset.png';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';



function SalonCarrucel(props) {
    const settings = {
        dots: true, // puntos de navegacion
        infinite: false, // carrucel infinito -- false para que no regrese siempre a la primera
        speed: 500,
        slidesToShow: 3, // mostrar tres tarjetas al mismo tiempo 
        slidesToScroll: 1, // mover una tarjeta por vez cuando se navega.
        swipeToSlide: true, //deslizar al arrastrar con el mouse 
    };

    return (
        <div className='container'>
            <Slider {...settings}>
                <div>
                    <SalonCard image={SpaAsset} />
                </div>
                <div>
                    <SalonCard image={SpaAsset} />
                </div>
                <div>
                    <SalonCard image={SpaAsset} />
                </div>
                <div>
                    <SalonCard image={SpaAsset} />
                </div>
                <div>
                    <SalonCard image={SpaAsset} />
                </div>
                <div>
                    <SalonCard image={SpaAsset} />
                </div>
            </Slider>
        </div>
    );
}



export default SalonCarrucel;