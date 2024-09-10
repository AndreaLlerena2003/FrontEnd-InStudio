import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DateTimePopup.css';

const DateTimePopup = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableHours, setAvailableHours] = useState([]);

  // Horas disponibles simuladas
  const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Simulamos que al seleccionar una fecha se obtienen las horas disponibles
    setAvailableHours(hours);
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

        {/* Selección de fecha */}
        <h1 className="tw-text-2xl tw-font-bold tw-mb-4">Selecciona la fecha</h1>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          locale="es-ES" // Asegura que el calendario esté en español
          className="custom-calendar shadow-sm tw-rounded-md tw-mb-6"
        />

        {/* Selección de hora */}
        <h1 className="tw-text-2xl tw-font-bold tw-mt-6 tw-mb-4">Selecciona la hora</h1>
        <div className="tw-grid tw-grid-cols-4 tw-gap-4">
          {availableHours.length > 0 ? (
            availableHours.map((hour, index) => (
              <button
                key={index}
                style={{ backgroundColor: "#7A7CE7" }}
                className="tw-text-white tw-py-1 tw-px-4 tw-rounded-lg tw-shadow-md tw-border tw-border-gray-300 hover:tw-bg-gray-300"
              >
                {hour}
              </button>
            ))
          ) : (
            <p>No hay horas disponibles para este día</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateTimePopup;
