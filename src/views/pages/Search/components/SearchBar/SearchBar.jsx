function SearchBar() {
  return (
    <form className="tw-max-w-md tw-mx-auto">
      <label
        for="default-search"
        className="tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 tw-sr-only tw-dark:text-white"
      >
        Search
      </label>
      <div className="tw-relative">
        <input
          type="search"
          id="default-search"
          className="tw-block tw-w-full tw-p-2.5 tw-ps-4 tw-text-sm tw-text-gray-900 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-50 tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-dark:bg-gray-700 tw-dark:border-s-gray-700  tw-dark:border-gray-600 tw-dark:placeholder-gray-400 tw-dark:text-white tw-dark:focus:border-blue-500"
          placeholder="Cortes de cabello, maquillaje, uñas, ..."
          required
        />

        <button
          type="submit"
          class="tw-absolute tw-top-0 tw-end-0 tw-p-2.5 tw-text-sm tw-font-medium tw-h-full tw-text-white tw-bg-[#7a7ce7] tw-rounded-e-lg tw-border tw-border-blue-700 tw-hover:bg-blue-800 tw-focus:ring-4 tw-focus:outline-none tw-focus:ring-blue-300 tw-dark:bg-blue-600 tw-dark:hover:bg-blue-700 tw-dark:focus:ring-blue-800"
        >
          <svg
            class="tw-w-4 tw-h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="tw-sr-only">Search</span>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
