import { FaMapMarkerAlt } from "react-icons/fa";

function SalonCard(props) {
  return (
    <div className="tw-flex tw-flex-1 tw-flex-col tw-bg-white tw-rounded-xl tw-border-solid tw-border-[1px] tw-border-slate-300 tw-shadow-md">
      <img className="tw-w-full" src={props.image} />
      <div className="tw-p-2">
        <h5 className="">Jaguar F-Pace</h5>
        <div className="row">
          <div className="col-md-6 text-start">
            <p className="tw-text-md">
              $132<span className="tw-text-xs">/services</span>
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end">
            <p className="text-card mb-0 me-2">Peru</p>
            <FaMapMarkerAlt></FaMapMarkerAlt>
          </div>
        </div>
        <a href="#" className="btn b-card tw-w-full">
          Look Now
        </a>
      </div>
    </div>
  );
}

export default SalonCard;
