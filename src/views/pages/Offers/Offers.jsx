import React from 'react';
import CardOffer from './components/CardOffer';

function Offers() {
    const offers = [
        {
            title: 'Manicure y Pedicure',
            eslogan: 'Hazte manicure y pedicure para tus manos y pies',
            dateInicio: '20/12/2024',
            dateFin: '20/01/2025',
            descuento: '30%',
            services: ['Uñas acrílicas', 'Uñas de gel', 'Manicure básico']
        },
        {
            title: 'Corte de Cabello',
            eslogan: 'Corte profesional para todo tipo de cabello',
            dateInicio: '15/11/2024',
            dateFin: '15/12/2024',
            descuento: '20%',
            services: ['Corte en capas', 'Corte pixie', 'Corte clásico']
        },
        {
            title: 'Masaje Relajante',
            eslogan: 'Relájate con un masaje profesional',
            dateInicio: '01/01/2025',
            dateFin: '31/01/2025',
            descuento: '25%',
            services: ['Masaje de tejido profundo', 'Masaje sueco', 'Masaje deportivo']
        }
    ];

    return (
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 tw-p-4">
            {offers.map((offerCard, index) => (
                <div key={index} className="tw-flex tw-flex-col tw-bg-white tw-shadow-md tw-rounded-lg tw-overflow-hidden tw-w-full tw-h-full">
                    <CardOffer offerCard={offerCard} />
                </div>
            ))}
        </div>
    );
}

export default Offers;
