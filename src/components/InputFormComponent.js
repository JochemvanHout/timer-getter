import React from 'react';

const inputFormComponent = (props) => (
  <form>
    <label htmlFor="minimumTime">
      Minimum time
      <br />

      <input
        id="minimumTime"
        name="minTimeNum"
        type="number"
        placeholder="1"
        value={props.data.minTimeNum}
        onChange={props.handleChange}
      />

      <select
        name="minTimeUnit"
        value={props.minTimeUnit}
        placeholder="days"
        onChange={props.handleChange}
      >
        <option value="hours">hour(s)</option>
        <option value="days">day(s)</option>
        <option value="months">month(s)</option>
        <option value="year">year</option>
      </select>

    </label>

    <br />

    <label htmlFor="maximumTime">
      Maximum time

      <br />

      <input
        id="maximumTime"
        name="maxTimeNum"
        type="number"
        placeholder="5"
        value={props.data.maxTimeNum}
        onChange={props.handleChange}
      />

      <select
        name="maxTimeUnit"
        value={props.data.maxTimeUnit}
        onChange={props.handleChange}
      >
        <option value="hours">hour(s)</option>
        <option value="days">day(s)</option>
        <option value="months">month(s)</option>
        <option value="year">year</option>
      </select>

    </label>

    <br />

    <button
      type="button"
      onClick={props.handleSubmit}
    >
      Go
    </button>

  </form>

);

export default inputFormComponent;
