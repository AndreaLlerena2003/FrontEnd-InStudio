import { useState, useEffect } from 'react';
import OfferDetail from './components/OfferDetailClient.jsx';
import OfferListClient from './components/OfferListClient.jsx';

function OffersClient() {
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      fetchOffers();
    }
  }, [isOpen]);

  const fetchOffers = async () => {
    setLoading(true);
    setError(null);
    try {
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
      setError('Hubo un problema al cargar las ofertas.');
    } finally {
      setLoading(false);
    }
  };

  const fetchOfferDetails = async (id) => {
    setLoading(true);
    setError(null);
    try {
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
          { name: "Uñas de gel", price: "$7.25 - $8.17" },
          { name: "Uñas de gel", price: "$7.25 - $8.17" },
          { name: "Uñas de gel", price: "$7.25 - $8.17" },
        ]
      };
      setSelectedOffer(data);
    } catch (error) {
      console.error('Error fetching offer details:', error);
      setError('Hubo un problema al cargar los detalles de la oferta.');
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loading) {
      return <p>Cargando...</p>;
    }
    if (error) {
      return <p className="error-message">{error}</p>;
    }
    if (selectedOffer) {
      return (
        <OfferDetail 
          offer={selectedOffer} 
          onBack={() => setSelectedOffer(null)} 
        />
      );
    }
    return (
      <OfferListClient 
        offers={offers} 
        onOfferClick={fetchOfferDetails} 
      />
    );
  };

  if (!isOpen) return null;

  return (
    <div className="tw-fixed tw-inset-0 tw-backdrop-blur-md tw-flex tw-justify-center tw-items-center">
      <div className="tw-bg-white tw-rounded-2xl tw-shadow-2xl tw-w-full tw-max-w-lg tw-m-4 tw-p-6 tw-mx-4 tw-my-8 sm:tw-mx-8 sm:tw-my-16">
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-sticky tw-top-0 tw-bg-white">
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
        <div className="tw-max-h-[70vh] tw-overflow-y-auto tw-pb-4 tw-pr-4 tw-mr-[-4px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default OffersClient;
