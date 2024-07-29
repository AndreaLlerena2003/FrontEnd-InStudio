import './Footer.css';
import LogoInStudio from '../../assets/LogoInStudioClaro.png';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function FooterSection() {
    return (
        <footer className="margin-footer text-white d-flex flex-wrap justify-content-between p-4" style={{backgroundColor: "#7A7CE7"}}>
            <div className="col-lg-3 mb-3">
                <h4 style={{ textAlign: "start", fontSize: "0.8rem" }}>Sobre InStudio</h4>
                <p style={{ textAlign: "start" , fontSize: "0.6rem", fontStyle: "italic"}}>
                    Un Salon Para Ti
                </p>
                <img src={LogoInStudio} alt="InStudio Logo" style={{ maxWidth: "20%" }} />
            </div>
            <div className="col-lg-3 mb-3">
                <h4 style={{ textAlign: "start" , fontSize: "0.8rem"}}>Contáctanos</h4>
                <p style={{ textAlign: "start" , fontSize: "0.6rem"}}>
                    Teléfono: (+51) 444 4444
                </p>
                <p style={{ textAlign: "start" , fontSize: "0.6rem"}}>
                    Correo: <a href="mailto:inStudio@gmail.com" className="text-white">inStudio@gmail.com</a>
                </p>
            </div>
            <div className="col-lg-3 mb-3">
                <h4 style={{ textAlign: "start" , fontSize: "0.8rem"}}>Información importante</h4>
                <p 
                    onClick={() => window.location.href = "/PreguntasFrecuentes"}
                    style={{ textAlign: "start", cursor: "pointer" , fontSize: "0.6rem"}}
                >
                    Preguntas frecuentes
                </p>
            </div>
            <div className="col-lg-3 mb-3">
                <h4 style={{ textAlign: "start" ,  fontSize: "0.8rem"}}>Registrate</h4>
                <div className="row">
                    <p className="text-start" style={{fontSize: "0.6rem"}}>Vuelve parte de nosotros</p>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;
