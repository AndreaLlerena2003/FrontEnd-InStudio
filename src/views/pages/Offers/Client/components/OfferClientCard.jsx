import React from "react";
import "./OfferClientCard.css";
function OfferCardClient({ id, title, description, discount, onClick }) {
  return (
    <div className="offer-card" onClick={onClick}>
      <div>
        <h2 className="tw-font-bold tw-text-xl">{title}</h2>
        <p className="tw-text-sm tw-text-gray-600">{description}</p>
      </div>
      <div className="discount">{discount}</div>
    </div>
  );
}

export default OfferCardClient;
