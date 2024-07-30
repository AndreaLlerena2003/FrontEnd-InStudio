import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SalonCardList from "./components/SalonCardList/SalonCardList";
import FilterCard from "./components/FilterCard/FilterCard";
import Image1 from "../../../assets/01_LandingPage.png"
import Image2 from "../../../assets/Nail_Service.png"
import Image3 from "../../../assets/Salon2.jpg"
function Search() {
  const [result, setResult] = useState([]);
  const temp = [
    {
      id: 1,
      name: "Belleza San Vitorio",
      price: 120,
      image: Image1,
      location: "Lima, Perú"
    },
    {
      id: 2,
      name: "Glamour Hair Studio",
      price: 200,
      image: Image2,
      location: "Lima, Perú"
    },
    {
      id: 3,
      name: "Lujo capilar",
      price: 100,
      image: Image3,
      location: "Arequipa, Perú"
    },
    {
      id: 4,
      name: "Boutique del corte",
      price: 300,
      image: Image2,
      location: "Lima, Perú"
    },
    {
      id: 5,
      name: "Belleza San Vitorio",
      price: 20,
      image: Image3,
      location: "Arequipa, Perú"
    },
    {
      id: 6,
      name: "Belleza San Vitorio",
      price: 5,
      image: Image1,
      location: "Lima, Perú"
    },
  ];

  function fetchSalons() {
    setResult(temp)
  }

  useEffect(() => {
    fetchSalons();
    console.log(result)
  }, [])

  return (
    <div className="tw-container-fluid tw-flex tw-flex-col tw-items-center lg:tw-px-20 tw-px-10">
      <h1 className="tw-py-12">¿Qué buscaras hoy?</h1>

      <div className="tw-w-[32rem]">
        <SearchBar />
      </div>

      <div className="tw-w-full tw-flex tw-py-12">
        <div className="tw-w-full tw-flex md:tw-flex-row tw-flex-col tw-gap-10">
          <div className="tw-flex tw-flex-col lg:tw-w-1/4 md:tw-w-1/3 sm:tw-w-full">
            <FilterCard />
          </div>
          <div className="tw-flex tw-flex-col lg:tw-w-3/4 md:tw-w-2/3 sm:tw-w-full">
            <SalonCardList data={result} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
