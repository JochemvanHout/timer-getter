import React from 'react';
import PropTypes from 'prop-types';

const labelTemplates = [
  { type: 'min', label: 'Minimum time' },
  { type: 'max', label: 'Maximum time' },
];

const units = ['hour(s)', 'day(s)', 'month(s)', 'year'];

const InputFormComponent = (props) => {
  const { data, handleChange, handleSubmit } = props;

  return (
    <form>
      {labelTemplates.map(({ type, label }) => (
        <React.Fragment key={type}>
          <label htmlFor={`${type}Time`}>
            {label}
            <br />
            <input
              id={`${type}Time`}
              name={`${type}TimeNum`}
              type="number"
              placeholder="1"
              value={data[`${type}TimeNum`]}
              onChange={handleChange}
            />
          </label>
          <select
            name={`${type}TimeUnit`}
            value={props[`${type}TimeUnit`]}
            placeholder="days"
            onChange={handleChange}
          >
            {units.map((unit) => (
              <option key={unit} value={unit.replace(/[()]/g, '')}>
                {unit}
              </option>
            ))}
          </select>

          <br />
        </React.Fragment>
      ))}

      <button type="button" onClick={handleSubmit}>
        Go
      </button>
    </form>
  );
};

export default InputFormComponent;

InputFormComponent.propTypes = {
  data: PropTypes.shape({
    chosenTime: PropTypes.string,
    maxTimeNum: PropTypes.number,
    maxTimeUnit: PropTypes.string,
    minTimeNum: PropTypes.number,
    minTimeUnit: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
