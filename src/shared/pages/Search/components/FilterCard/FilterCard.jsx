function FilterCard() {
  return (
    <div className="tw-flex tw-flex-col tw-px-3 tw-py-4 tw-rounded-md tw-border-solid tw-border-[1px] tw-border-slate-300 tw-shadow-md">
      <h4>Filtros</h4>
      <hr />
      <h5>Categoría</h5>

      <h5>Precio</h5>
      <label for="customRange1" class="form-label">
        Escoge según precios
      </label>
      <input type="range" class="form-range" id="customRange1"></input>
    </div>
  );
}

export default FilterCard;
