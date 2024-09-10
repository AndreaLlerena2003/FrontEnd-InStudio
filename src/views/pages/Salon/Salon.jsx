import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useParams } from "react-router-dom";
import React from "react";
import Image1 from "../../../assets/01_LandingPage.png";
import Image2 from "../../../assets/Nail_Service.png";
import Image3 from "../../../assets/Salon2.jpg";
import SalonInfo from './components/SalonInfo/SalonInfo';
import SalonDetails from './components/SalonDetails/SalonDetails';
import Services from './components/Services/Services';
import SalonReviews from './components/SalonReviews/SalonReviews';

const temp = [
  {
    id: 1,
    name: "Belleza San Vitorio",
    price: 120,
    image: Image1,
    location: "Lima, Perú",
    rating: 4.5,
    description: "Un salón de belleza completo con servicios de alta calidad.",
    hours: "Lunes a Viernes: 9:00 - 18:00, Sábado: 10:00 - 16:00",
    contact: "+51 987 654 321"
  },
  {
    id: 2,
    name: "Glamour Hair Studio",
    price: 200,
    image: Image2,
    location: "Lima, Perú",
    rating: 5,
    description: "Estudio de peluquería con los mejores estilos y tratamientos.",
    hours: "Lunes a Viernes: 10:00 - 19:00, Sábado: 11:00 - 17:00",
    contact: "+51 912 345 678"
  },
  {
    id: 3,
    name: "Lujo capilar",
    price: 100,
    image: Image3,
    location: "Arequipa, Perú",
    rating: 3.8,
    description: "Salón especializado en tratamientos capilares de lujo.",
    hours: "Lunes a Viernes: 9:00 - 18:00, Sábado: 10:00 - 15:00",
    contact: "+51 945 678 123"
  },
  {
    id: 4,
    name: "Boutique del corte",
    price: 300,
    image: Image2,
    location: "Lima, Perú",
    rating: 4,
    description: "Boutique con cortes y estilos exclusivos para cada ocasión.",
    hours: "Lunes a Viernes: 9:00 - 17:00, Sábado: 10:00 - 14:00",
    contact: "+51 998 765 432"
  },
  {
    id: 5,
    name: "Belleza San Vitorio",
    price: 20,
    image: Image3,
    location: "Arequipa, Perú",
    rating: 2.5,
    description: "Servicios básicos de belleza a precios accesibles.",
    hours: "Lunes a Viernes: 10:00 - 17:00",
    contact: "+51 951 234 567"
  },
  {
    id: 6,
    name: "Belleza San Vitorio",
    price: 5,
    image: Image1,
    location: "Lima, Perú",
    rating: 4.2,
    description: "Servicios económicos de belleza con atención personalizada.",
    hours: "Lunes a Viernes: 9:00 - 19:00",
    contact: "+51 963 852 741"
  }
];

const salonServices = {
  1: ["Corte de cabello", "Coloración", "Peinados", "Tratamientos capilares", "Manicura", "Pedicura"],
  2: ["Corte de cabello", "Coloración", "Peinados", "Tratamientos capilares"],
  3: ["Corte de cabello", "Tratamientos capilares", "Coloración"],
  4: ["Corte de cabello", "Peinados"],
  5: ["Manicura", "Pedicura", "Coloración", "Tratamientos capilares"],
  6: ["Corte de cabello", "Manicura", "Pedicura", "Coloración"],
};

// Variable de opiniones
const opinions = [
  {
    salonId: 1,
    reviews: [
      {
        id: 1,
        name: "Ana Pérez",
        service: "Corte de cabello",
        rating: 5,
        review: "Excelente servicio, muy profesional.",
        date: "2024-09-01",
      },
      {
        id: 2,
        name: "Luis Gómez",
        service: "Manicura",
        rating: 4,
        review: "Buen servicio, aunque el tiempo de espera fue largo.",
        date: "2024-09-01",
      },
    ],
  },
];




const Salon = () => {
  const { id } = useParams();
  const salon = temp.find((s) => s.id === parseInt(id));
  const services = salonServices[salon.id];
  const salonOpinions = opinions.find((o) => o.salonId === parseInt(id))?.reviews || [];

  return (
    <div className="tw-flex tw-flex-col lg:tw-px-20 tw-px-10">
      <div className="tw-flex tw-flex-col tw-flex-grow">
        {salon ? (
          <>
            <SalonInfo salon={salon} />
            <div 
              className="tw-w-full tw-h-96 tw-bg-repeat tw-rounded-lg"
              style={{ 
                backgroundImage: `url(${salon.image})`,
                backgroundSize: '200px 200px',
                backgroundPosition: '0 0',
              }}
            >
            </div>
            <div className="tw-flex tw-space-x-4 tw-mt-4">
              <div className="tw-flex-1">
                <SalonDetails salon={salon} />
              </div>
              <div className="tw-flex-1">
                <Services salonId={salon.id} services={services} />
              </div>
            </div>
            <SalonReviews reviews={salonOpinions} salonServices={services} />
          </>
        ) : (
          <h1 className="tw-py-12">Salón no encontrado</h1>
        )}
      </div>
    </div>
  );
};

export default Salon;
