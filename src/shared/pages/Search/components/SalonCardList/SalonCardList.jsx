import SalonCard from "../SalonCard/SalonCard";
import Image from "../../../../../assets/01_LandingPage.png";

function SalonCardList(props) {
  return (
    <>
      <h4 className="tw-pb-4">
        {props.data.length == 0
          ? "No hay resultados"
          : `${props.data.length} Resultado${props.data.length > 1 ? "s" : ""}`}
      </h4>

      <div className="tw-grid lg:tw-grid-cols-3 sm:tw-grid-cols-2 tw-gap-6">
        {props.data.map((temp) => {
          return <SalonCard key={temp.id} data={temp} />;
        })}
      </div>
    </>
  );
}

export default SalonCardList;
