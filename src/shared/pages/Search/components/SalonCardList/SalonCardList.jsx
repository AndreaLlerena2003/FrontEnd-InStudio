import SalonCard from "../SalonCard/SalonCard";
import Image from "../../../../../assets/01_LandingPage.png";

function SalonCardList() {
  return (
    <>
      <h4 className="tw-pb-4">6 Resultados</h4>

      <div className="tw-grid lg:tw-grid-cols-3 sm:tw-grid-cols-2 tw-gap-6">
        <SalonCard image={Image} />
        <SalonCard image={Image} />
        <SalonCard image={Image} />
        <SalonCard image={Image} />
        <SalonCard image={Image} />
        <SalonCard image={Image} />
      </div>
    </>
  );
}

export default SalonCardList;
