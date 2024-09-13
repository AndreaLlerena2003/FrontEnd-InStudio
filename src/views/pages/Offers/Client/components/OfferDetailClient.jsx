import React, { useState } from 'react';
import ServiceTable from '../../../../../shared/ServicesTable/ServiceTable.jsx';
import './OfferDetailClient.css'
const OfferDetail = ({ offer, onBack }) => {
  const [day, setDay] = useState(offer.day || '');
  const [hour, setHour] = useState(offer.hour || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la reserva
    console.log('Reserva enviada:', { day, hour });
    // Puedes agregar aquí la lógica para enviar los datos al servidor
  };

  return (
    <div className="tw-p-4">
      <button
        onClick={onBack}
        className="tw-mb-4 tw-flex tw-items-center tw-text-gray-600 hover-text-custom tw-transition-colors tw-duration-200 tw-ease-in-out tw-bg-transparent tw-border-none tw-px-0"
      >
        <svg className="tw-w-6 tw-h-6 tw-mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Volver a ofertas
      </button>

      <img src={offer.image} alt={offer.title} className="tw-w-full tw-rounded-lg tw-mb-4" />
      <p className="tw-mb-2"><strong>DESCRIPCIÓN:</strong> {offer.description}</p>
      <p className="tw-mb-4"><strong>DESCUENTO:</strong> {offer.discount}</p>
      <div className="tw-flex tw-justify-between tw-mb-4">
        <div>
          <p><strong>INICIO:</strong> {offer.start}</p>
          <p><strong>FINAL:</strong> {offer.end}</p>
        </div>
      </div>
      <ServiceTable services={offer.services} />

      <form onSubmit={handleSubmit} className="tw-mt-6">
        <div className="tw-mb-4">
          <label htmlFor="day" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Día:</label>
          <input
            type="date"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="tw-mt-1 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm tw-px-3 tw-py-2 focus:tw-border-indigo-300 focus:tw-ring focus:tw-ring-indigo-200 focus:tw-ring-opacity-50"
            required
          />
        </div>
        <div className="tw-mb-4">
          <label htmlFor="hour" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Hora:</label>
          <input
            type="time"
            id="hour"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            className="tw-mt-1 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm tw-px-3 tw-py-2 focus:tw-border-indigo-300 focus:tw-ring focus:tw-ring-indigo-200 focus:tw-ring-opacity-50"
            required
          />
        </div>
        <button
          type="submit"
          className="tw-w-full tw-text-white tw-py-2 tw-rounded-lg hover:tw-bg-purple-700 focus:tw-outline-none focus:tw-ring-0 tw-border-0 reserve-button"
        >
          Reservar
        </button>
      </form>
    </div>
  );
};

export default OfferDetail;
