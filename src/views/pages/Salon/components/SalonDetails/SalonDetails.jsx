import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const SalonDetails = ({ salon }) => {
  return (
    <div className="tw-mt-8 tw-p-4">
      {/* Descripción */}
      <div className="tw-mb-4">
        <h1 className="tw-text-2xl tw-font-bold">Descripción</h1>
        <p className="tw-text-lg tw-mt-2">{salon.description}</p>
      </div>
      
      {/* Horario */}
      <div className="tw-mb-4">
        <h1 className="tw-text-2xl tw-font-bold">Horario</h1>
        <p className="tw-text-lg tw-mt-2">{salon.hours}</p>
      </div>
      
      {/* Contacto */}
      <div className="tw-mb-4">
        <h1 className="tw-text-2xl tw-font-bold">Contacto</h1>
        <div className="tw-flex tw-items-center tw-mt-2">
          <FaPhoneAlt size={20} className="tw-mr-2 tw-align-middle" />
          <p className="tw-text-lg tw-mb-0 tw-align-middle">{salon.contact}</p>
        </div>
      </div>
      
      {/* Dirección */}
      <div>
        <h1 className="tw-text-2xl tw-font-bold">Dirección</h1>
        <div className="tw-flex tw-items-center tw-mt-2">
          <MdLocationOn size={20} className="tw-mr-2 tw-align-middle" />
          <p className="tw-text-lg tw-mb-0 tw-align-middle">{salon.location}</p>
        </div>
      </div>
    </div>
  );
};

export default SalonDetails;
