import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";

function Search() {
  return (
    <div className="tw-container-fluid tw-flex tw-flex-col tw-items-center">
      <h1 className="tw-py-12">¿Qué buscaras hoy?</h1>
      <div className="tw-w-[32rem]">
        <SearchBar />
      </div>
    </div>
  );
}

export default Search;
