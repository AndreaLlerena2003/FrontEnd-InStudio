import React, { useState, useRef } from 'react';

const Servicios = ({ servicios }) => {
  const [showMore, setShowMore] = useState(false);
  const containerRef = useRef(null);
  const visibleServices = showMore ? servicios : servicios.slice(0, 2);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="tw-w-full tw-mt-2 tw-max-w-xs sm:tw-max-w-sm tw-mx-auto">
      <h5 className="tw-text-indigo-700 tw-font-semibold tw-bg-indigo-100 tw-px-2 tw-py-1.5 tw-rounded-t-lg tw-text-xs sm:tw-text-sm">
        Servicio
      </h5>
      <div
        className={`tw-transition-all tw-duration-300 ${
          showMore ? 'tw-max-h-screen' : 'tw-max-h-12'
        } tw-overflow-hidden tw-bg-white`}
        ref={containerRef}
        style={{ border: 'none', boxShadow: 'none' }} 
      >
        <div className="tw-w-full">
          <div className="tw-hidden sm:tw-block">

            <table className="tw-w-full tw-border-collapse tw-text-xs sm:tw-text-sm">
              <tbody>
                {visibleServices.map((servicio, index) => (
                  <tr key={index} className="tw-border-t">
                    <td className="tw-px-3 tw-py-2">
                      {servicio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="tw-block sm:tw-hidden">

            <ul className="tw-list-disc tw-pl-4 tw-text-xs sm:tw-text-sm">
              {visibleServices.map((servicio, index) => (
                <li key={index} className="tw-py-1.5">
                  {servicio}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {servicios.length > 2 && (
        <div
          className="tw-text-indigo-600 tw-px-2 tw-py-1.5 tw-bg-indigo-50 tw-rounded-b-lg tw-cursor-pointer tw-text-center tw-text-xs sm:tw-text-sm"
          onClick={toggleShowMore}
        >
          {showMore ? "Mostrar menos servicios" : `+ ${servicios.length - 2} servicios ...`}
        </div>
      )}
    </div>
  );
}

export default Servicios;
