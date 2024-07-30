import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SalonCardList from "./components/SalonCardList/SalonCardList";
import FilterCard from "./components/FilterCard/FilterCard";

function Search() {
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
            <SalonCardList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
