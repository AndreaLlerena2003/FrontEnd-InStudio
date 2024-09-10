import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { FaFilter } from 'react-icons/fa'; // Importa ícono para el filtro, si es necesario
import { propTypes } from 'react-bootstrap/esm/Image';

const SalonReviews = ({ reviews, salonServices }) => {
  const [filter, setFilter] = useState("All");
  // Filtra las opiniones por el servicio seleccionado
  const filteredReviews = filter === "All" ? reviews : reviews.filter(review => review.service === filter);

  return (
    <div className="tw-py-8">
      {/* Header de Opiniones */}
      <div className="tw-flex tw-items-center tw-justify-between">
        <h1 className="tw-text-2xl tw-font-bold">{filteredReviews.length} opiniones</h1>
        {/* Filtro */}
        <div className="tw-relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="tw-py-2 tw-mx-6 tw-rounded-lg tw-border tw-shadow-sm"
          >
            <option value="All">Todos los servicios</option>
            {salonServices.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Opiniones */}
      <hr className="tw-my-4" />
      {filteredReviews.map((review) => (
        <div key={review.id} className="tw-mt-6">
          <div className="tw-flex tw-items-center tw-mb-2">
            <div className="tw-flex tw-items-center tw-mr-auto">
                <h2 className="tw-text-xl tw-font-bold tw-mr-2 tw-mb-0 tw-align-middle">{review.name}</h2>
                <p className="tw-mr-2 tw-mb-0 tw-align-middle">({review.service})</p>
            </div>
            <div className="tw-flex tw-mb-0 tw-items-center tw-align-middle">
                <ReactStars
                count={5}
                value={review.rating}
                size={20}
                activeColor="#000000"
                edit={false}
                />
            </div>
          </div>
          <p>{review.review}</p>
          <p className="tw-text-gray-500 text-xs">{review.date}</p>
          <hr className="tw-my-4" />
        </div>
      ))}
            {/* Botón para escribir una opinión */}
            <div className="tw-flex tw-justify-end tw-mt-6">
        <button style={{backgroundColor: "#7A7CE7"}} className="tw-text-white tw-py-2 tw-px-6 tw-border-0 tw-rounded-lg hover:tw-bg-purple-700" >
          Escribir una opinión
        </button>
      </div>
    </div>
  );
};

export default SalonReviews;
