import React from "react";

function OfferDetailModal({ offer, onClose }) {
  return (
    <div className="tw-fixed tw-inset-0 tw-backdrop-blur-md tw-flex tw-justify-center tw-items-center">
      <div className="tw-bg-white tw-rounded-2xl tw-shadow-2xl tw-overflow-y-auto tw-max-h-screen tw-w-full tw-max-w-lg tw-p-8 tw-m-4">
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
          <h1 className="tw-text-2xl sm:tw-text-3xl tw-font-bold">{offer.title}</h1>
          <button className="tw-text-xl tw-font-bold tw-text-gray-800" onClick={onClose}>
            ×
          </button>
        </div>
        <div>
          <img src={offer.details.image} alt="Offer" className="tw-w-full tw-rounded-lg tw-mb-4" />
          <div className="tw-flex tw-justify-between tw-text-sm tw-mb-2">
            <span className="tw-font-bold">DESCRIPCIÓN</span>
            <span className="tw-font-bold">DESCUENTO</span>
          </div>
          <div className="tw-flex tw-justify-between tw-text-sm tw-mb-6">
            <span>{offer.description}</span>
            <span>{offer.discount}</span>
          </div>
          <div className="tw-text-sm tw-mb-6">
            <div className="tw-flex tw-justify-between">
              <span className="tw-font-bold">INICIO</span>
              <span>{offer.details.start}</span>
            </div>
            <div className="tw-flex tw-justify-between">
              <span className="tw-font-bold">FINAL</span>
              <span>{offer.details.end}</span>
            </div>
            <div className="tw-flex tw-justify-between tw-mt-4">
              <span className="tw-font-bold">Día</span>
              <span>{offer.details.day}</span>
              <span className="tw-font-bold">Hora</span>
              <span>{offer.details.hour}</span>
            </div>
          </div>
          <table className="tw-w-full tw-mb-6 tw-border-collapse tw-rounded-md tw-border">
            <thead>
              <tr>
                <th className="tw-border tw-px-4 tw-py-2">Servicio</th>
                <th className="tw-border tw-px-4 tw-py-2">Precio</th>
              </tr>
            </thead>
            <tbody>
              {offer.details.services.map((service, index) => (
                <tr key={index}>
                  <td className="tw-border tw-px-4 tw-py-2">{service.name}</td>
                  <td className="tw-border tw-px-4 tw-py-2">{service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="tw-bg-purple-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-lg tw-w-full">
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}

export default OfferDetailModal;
