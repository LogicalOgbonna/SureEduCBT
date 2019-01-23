import React from "react";

const SelectListGroup = ({ options, name, value, onChange, label }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} vlaue={option.label}>
      {option.label}
    </option>
  ));

  return (
    <React.Fragment>
      <label class="form-control-label">{label}</label>
      <select
        class="form-control"
        // className={classnames('form-control form-control-lg', {
        //   'is-invalid': error
        // })}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
    </React.Fragment>
  );
};

export default SelectListGroup;
