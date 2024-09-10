import React from 'react';

const Services = ({ services }) => {
  return (
    <div className="tw-p-4">
      <h1 className="tw-text-2xl tw-font-bold tw-mb-4">Servicios</h1>
      <div className="tw-grid tw-grid-cols-2 tw-gap-4">
        {services.map((service, index) => (
          <button
            key={index}
            className="tw-bg-white  tw-py-2 tw-px-4 tw-rounded-lg tw-shadow-md tw-border-0 hover:tw-bg-gray-300"
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Services;
