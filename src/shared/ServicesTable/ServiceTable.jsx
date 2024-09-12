import React from 'react';

const ServiceTable = ({ services }) => {
  return (
    <table className="tw-w-full tw-border-collapse tw-border tw-border-purple-300">
      <thead>
        <tr className="tw-bg-purple-100">
          <th className="tw-border tw-border-purple-300 tw-p-2 tw-text-left tw-text-purple-700">Servicio</th>
          <th className="tw-border tw-border-purple-300 tw-p-2 tw-text-left tw-text-purple-700">Precio</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service, index) => (
          <tr key={index} className="tw-even:bg-purple-50">
            <td className="tw-border tw-border-purple-300 tw-p-2">{service.name}</td>
            <td className="tw-border tw-border-purple-300 tw-p-2">{service.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceTable;