import './OfferDetailClient.css';
function OfferDetail({ offer, onBack }) {
  return (
    <div className="offer-detail">
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <button className="back-button" onClick={onBack}>←</button>
        <h2 className="tw-text-2xl tw-font-bold">{offer.title}</h2>
      </div>
      <img src={offer.image} alt={offer.title} />
      <div className="tw-flex tw-justify-between tw-mb-2">
        <span className="tw-font-bold">DESCRIPCIÓN</span>
        <span className="tw-font-bold">DESCUENTO</span>
      </div>
      <div className="tw-flex tw-justify-between tw-mb-4">
        <span>{offer.description}</span>
        <span>{offer.discount}</span>
      </div>
      <div className="tw-mb-4">
        <div className="tw-flex tw-justify-between">
          <span className="tw-font-bold">INICIO</span>
          <span>{offer.start}</span>
        </div>
        <div className="tw-flex tw-justify-between">
          <span className="tw-font-bold">FINAL</span>
          <span>{offer.end}</span>
        </div>
        <div className="tw-flex tw-justify-between tw-mt-2">
          <span className="tw-font-bold">Día</span>
          <span>{offer.day}</span>
        </div>
        <div className="tw-flex tw-justify-between">
          <span className="tw-font-bold">Hora</span>
          <span>{offer.hour}</span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {offer.services.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="reserve-button">Reservar</button>
    </div>
  );
}
export default OfferDetail;