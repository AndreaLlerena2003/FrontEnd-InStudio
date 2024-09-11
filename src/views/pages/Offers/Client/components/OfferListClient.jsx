import OfferCardClient from './OfferClientCard.jsx';

const OfferListClient = ({ offers, onOfferClick }) => {
  if (!offers.length) {
    return <p>No hay ofertas disponibles.</p>;
  }
  return (
    <div>
      {offers.map((offer) => (
        <OfferCardClient
          key={offer.id}
          id={offer.id}
          title={offer.title}
          description={offer.description}
          discount={offer.discount}
          onClick={() => onOfferClick(offer.id)}
        />
      ))}
    </div>
  );
};
export default OfferListClient;
