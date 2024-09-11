import { useState, useEffect } from 'react';
import OfferDetail from './components/OfferDetailClient.jsx';
import OfferListClient from './components/OfferListClient.jsx';

function OffersClient() {
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen && !selectedOffer) {
      fetchOffers();
    }
  }, [isOpen, selectedOffer]);

  const fetchOffers = async () => {
    setLoading(true);
    try {
      // Simula una llamada a la API
      const data = [
        { id: 1, title: "Nicos", description: "Todo bueno, todo chevere. Servicio de uñas para que queden bien uwu", discount: "30%" },
        { id: 2, title: "Nicos", description: "Todo bueno, todo chevere. Servicio de uñas para que queden bien uwu", discount: "30%" },
        { id: 3, title: "Nicos", description: "Todo bueno, todo chevere. Servicio de uñas para que queden bien uwu", discount: "30%" },
        { id: 4, title: "Nicos", description: "Todo bueno, todo chevere. Servicio de uñas para que queden bien uwu", discount: "30%" },
        { id: 5, title: "Nicos", description: "Todo bueno, todo chevere. Servicio de uñas para que queden bien uwu", discount: "30%" },
      ];
      setOffers(data);
    } catch (error) {
      console.error('Error fetching offers:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchOfferDetails = async (id) => {
    setLoading(true);
    console.log("fetchOfferDetails", id);
    try {
      // Simula una llamada a la API para obtener detalles
      const data = {
        id: id,
        title: "Nicos",
        description: "Todo bueno, todo chevere. Servicio de uñas para que queden bien uwu",
        discount: "30%",
        image: "/api/placeholder/400/300",
        start: "23/9/24",
        end: "24/9/24",
        day: "Lunes a Viernes",
        hour: "14:00",
        services: [
          { name: "Uñas acrílicas", price: "$7.25 - $8.17" },
          { name: "Uñas de gel", price: "$7.25 - $8.17" },
        ]
      };
      setSelectedOffer(data);
    } catch (error) {
      console.error('Error fetching offer details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="tw-fixed tw-inset-0 tw-backdrop-blur-md tw-flex tw-justify-center tw-items-center">
      <div className="tw-bg-white tw-rounded-2xl tw-shadow-2xl tw-w-full tw-max-w-lg tw-m-4 tw-p-6 tw-pb-10">
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
          <h1 className="tw-text-2xl sm:tw-text-3xl tw-font-bold">
            {selectedOffer ? selectedOffer.title : "Ofertas"}
          </h1>
          <button 
            className="tw-text-xl tw-font-bold tw-text-gray-800 tw-bg-transparent tw-border-0 tw-p-0" 
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>
        {loading ? (
          <p>Cargando...</p>
        ) : selectedOffer ? (
          <OfferDetail 
            offer={selectedOffer} 
            onBack={() => setSelectedOffer(null)}
          />
        ) : (
          <div className="tw-overflow-y-auto tw-max-h-96 tw-p-4">
            <OfferListClient 
              offers={offers} 
              onOfferClick={fetchOfferDetails} 
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default OffersClient;
