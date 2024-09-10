import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import DateTimePopup from '../DateTimePopup/DateTimePopup';

const ServicePopup = ({ service, onClose }) => {
  
  

  const subservices = [
    { name: "Subservicio 1", price: "20" },
    { name: "Subservicio 2", price: "30" },
    { name: "Subservicio 3", price: "25" }
  ];

  const [selectedSubservice, setSelectedSubservice] = useState(null);
  const [showDateTimePopup, setShowDateTimePopup] = useState(false);

  const handleRowClick = (subservice) => {
    setSelectedSubservice(subservice);
  };

  const handleReserveClick = () => {
    if (selectedSubservice) {
      setShowDateTimePopup(true); // Muestra el popup para seleccionar fecha y hora
    }
  };

  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center">
      <div className="tw-bg-white tw-p-6 tw-rounded-lg tw-w-1/2 tw-max-w-md tw-relative">
        <button
          className="tw-absolute tw-top-2 tw-right-2 tw-bg-transparent tw-border-0 tw-text-black tw-text-2xl"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <div className='mb-4'>
          <h2 className="tw-text-2xl tw-font-bold tw-mb-4">{service}</h2>
          <p className="tw-mb-4">Descripción del servicio aquí.</p>
        </div>
        <div className='mt-4'>
          <table className="tw-w-full tw-my-4 tw-rounded-lg">
            <thead>
              <tr className="tw-bg-purple-100">
                <th style={{ color: "#7A7CE7" }} className="tw-p-2 tw-text-sm tw-text-left">Subservicio</th>
                <th style={{ color: "#7A7CE7" }} className="tw-p-2 tw-text-sm tw-text-left">Precio (desde)</th>
              </tr>
            </thead>
            <tbody>
              {subservices.map((subservice, index) => (
                <tr
                  key={index}
                  className={`tw-border-b tw-border-gray-200 tw-cursor-pointer ${selectedSubservice === subservice ? 'tw-bg-gray-100' : 'hover:tw-bg-gray-50'}`}
                  onClick={() => handleRowClick(subservice)}
                >
                  <td className="tw-font-semibold tw-text-sm tw-p-2">{subservice.name}</td>
                  <td className="tw-font-semibold tw-text-sm tw-p-2 ">S/ {subservice.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="tw-flex tw-items-center tw-justify-between tw-bg-purple-100 tw-px-4 tw-py-2 tw-rounded-lg">
          <p style={{color: "#7A7CE7"}} className="tw-font-semibold mb-0">
            Servicio: {selectedSubservice ? selectedSubservice.name : 'Seleccionar un servicio'}
          </p>
          <button
            onClick={handleReserveClick}
            style={{backgroundColor: "#7A7CE7"}}
            className={`tw-bg-purple-600 tw-text-white tw-py-1 tw-border-0 tw-px-4 tw-rounded-lg hover:tw-bg-purple-700 ${!selectedSubservice ? 'tw-opacity-50 tw-cursor-not-allowed' : ''}`}
            disabled={!selectedSubservice}
          >
            Reservar
          </button>
        </div>
      </div>
      {/* Popup para seleccionar fecha y hora */}
      {showDateTimePopup && <DateTimePopup onClose={() => setShowDateTimePopup(false)} />}
    </div>
  );
};

export default ServicePopup;
