import React from "react";

function OfferCardClient({ title, description, discount, onClick }) {
  return (
    <div
      className="tw-rounded-lg tw-p-4 tw-flex tw-justify-between tw-items-center tw-mb-4 tw-shadow tw-cursor-pointer tw-transition-all tw-duration-100 hover:tw-bg-[#ADAEFF]"
      style={{ backgroundColor: "#F0F0FA" }}
      onClick={onClick}
    >
      <div>
        <h2 className="tw-font-bold tw-text-xl">{title}</h2>
        <p className="tw-text-sm tw-text-gray-600">{description}</p>
      </div>
      <div className="tw-text-3xl tw-font-bold">{discount}</div>
    </div>
  );
}

export default OfferCardClient;
