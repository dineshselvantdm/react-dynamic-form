import React from 'react';
const DropDown = (props) => {
  return(
    <div className="form-group">
      <label htmlFor={props.name}> {props.label} </label>
      <select
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        >
        {props.values.map(option => {
          return (
            <option
              key={option}
              value={option}
              label={option}>{option}
            </option>
          );
        })}
      </select>
    </div>)
}

export default DropDown;