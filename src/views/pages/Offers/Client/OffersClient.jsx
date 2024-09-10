import OfferCardClient from './components/OfferClientCard.jsx';
function OffersClient() {
    // Datos de ejemplo de ofertas
    const offers = [
      {
        title: "Nicos",
        description: "Todo bueno, todo chevere. Servicio de uñas para que queden bien uwu",
        discount: "30%",
      },
      {
        title: "Nicos",
        description: "Todo bueno, todo chevere. Servicio de uñas para que queden bien uwu",
        discount: "30%",
      },
      {
        title: "Nicos",
        description: "Todo bueno, todo chevere. Servicio de uñas para que queden bien uwu",
        discount: "30%",
      },
      {
        title: "Nicos",
        description: "Todo bueno, todo chevere. Servicio de uñas para que queden bien uwu",
        discount: "30%",
      },
      {
        title: "Nicos",
        description: "Todo bueno, todo chevere. Servicio de uñas para que queden bien uwu",
        discount: "30%",
      },
      // Puedes añadir más ofertas aquí
    ];
    return (
      // Contenedor del modal con fondo desenfocado
      <div className="tw-fixed tw-inset-0 tw-backdrop-blur-md tw-flex tw-justify-center tw-items-center">
        {/* Contenedor de la ventana de ofertas */}
        <div className="tw-bg-white tw-rounded-2xl tw-shadow-2xl tw-w-full tw-max-w-lg tw-m-4 tw-p-6 tw-pb-10" >
          <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
            <h1 className="tw-text-2xl sm:tw-text-3xl tw-font-bold">Ofertas</h1>
            <button className="tw-text-xl tw-font-bold tw-text-gray-800 tw-bg-transparent tw-border-0 tw-p-0">
              ×
            </button>
          </div>
          {/* Contenedor con scroll para las ofertas */}
          <div className="tw-overflow-y-auto tw-max-h-96 tw-p-4 ">
            {offers.map((offer, index) => (
              <div key={index} className="tw-mb-4"> {/* Margin bottom for space between cards */}
                <OfferCardClient
                  title={offer.title}
                  description={offer.description}
                  discount={offer.discount}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default OffersClient;