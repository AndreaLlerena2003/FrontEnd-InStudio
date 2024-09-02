import React from 'react';
import Servicios from "./Services";

const CardOffer = ({ offerCard }) => {
  return (
    <div className="tw-flex tw-flex-col tw-bg-white tw-rounded-lg tw-overflow-hidden tw-w-full tw-max-w-xs tw-mx-auto tw-mb-4">
      <div className="tw-flex-1 tw-px-4 tw-py-3 tw-bg-indigo-50 tw-h-32 sm:tw-h-40 lg:tw-h-48">
        <h5 className="tw-text-xs sm:tw-text-sm md:tw-text-base lg:tw-text-lg tw-font-semibold tw-text-indigo-800 tw-truncate">
          {offerCard.title}
        </h5>
        <p className="tw-text-gray-600 tw-mt-1 tw-text-xs sm:tw-text-sm md:tw-text-sm lg:tw-text-base tw-overflow-hidden tw-whitespace-nowrap tw-text-ellipsis">
          {offerCard.eslogan}
        </p>
      </div>
      <div className="tw-flex-1 tw-px-4 tw-py-3 tw-flex tw-flex-col tw-items-center tw-justify-between sm:tw-justify-start tw-space-y-4">

        <div className="tw-hidden lg:tw-flex lg:tw-flex-row lg:tw-justify-center lg:tw-space-x-8 lg:tw-text-gray-700 lg:tw-font-semibold lg:tw-text-xs lg:tw:text-sm">
          <div className="tw-flex tw-flex-col tw-items-center">
            <p className="tw-text-xs lg:tw-text-xs">INICIO</p>
            <p className="tw-text-xs lg:tw-text-xs">{offerCard.dateInicio}</p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <p className="tw-text-xs lg:tw-text-xs">FIN</p>
            <p className="tw-text-xs lg:tw-text-xs">{offerCard.dateFin}</p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <p className="tw-text-xs lg:tw-text-xs">DESCUENTO</p>
            <p className="tw-text-xs lg:tw-text-xs">{offerCard.descuento}</p>
          </div>
        </div>
   
        <div className="tw-flex lg:tw-hidden tw-flex-col tw-items-center tw-space-y-3 tw-text-gray-700 tw-font-semibold tw-text-xs lg:tw-text-sm">
          <div className="tw-flex tw-flex-col tw-items-center">
            <p className="tw-text-xs lg:tw-text-xs">INICIO</p>
            <p className="tw-text-xs lg:tw-text-xs">{offerCard.dateInicio}</p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <p className="tw-text-xs lg:tw-text-xs">FIN</p>
            <p className="tw-text-xs lg:tw-text-xs">{offerCard.dateFin}</p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <p className="tw-text-xs lg:tw-text-xs">DESCUENTO</p>
            <p className="tw-text-xs lg:tw-text-xs">{offerCard.descuento}</p>
          </div>
        </div>
        <Servicios servicios={offerCard.services} />
      </div>
    </div>
  );
}

export default CardOffer;
