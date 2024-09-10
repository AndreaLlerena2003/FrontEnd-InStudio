import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';

const SalonInfo = ({ salon }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="tw-flex tw-justify-between tw-items-center">
      <div className="tw-flex tw-items-center">
        <h1 className="tw-py-12 tw-flex tw-items-center">
          {salon.name}
          <ReactStars
            count={5}
            value={salon.rating}
            size={24}
            activeColor="#000000"
            edit={false}
            className="tw-ml-5"
          />
        </h1>
      </div>
      <div className="tw-cursor-pointer">
        <FaHeart
          size={24}
          color={isFavorited ? "red" : "gray"}
          onClick={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default SalonInfo;
