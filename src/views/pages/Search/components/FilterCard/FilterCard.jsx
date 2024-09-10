import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";
import React from "react";

function FilterCard(props) {
  return (
    <div className="tw-flex tw-flex-col tw-px-3 tw-py-4 tw-rounded-md tw-border-solid tw-border-[1px] tw-border-slate-300 tw-shadow-md">
      <h4>Filtros</h4>
      <hr />
      <h5>Categoría</h5>

      <select class="form-select" aria-label="Default select example">
        <option selected>Todas</option>
        {props.categories.map((temp) => {
          return <option value={temp.id}>{temp.name}</option>;
        })}
      </select>
      <br/>
      <h5>Precio</h5>
      <div>
        <MultiRangeSlider min={5} max={300} />
      </div>
    </div>
  );
}

export default FilterCard;
