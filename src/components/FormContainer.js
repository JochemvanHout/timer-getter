import React, { Component } from 'react';
import prettyms from 'pretty-ms';
import dateENUM from '../config';
import InputFormComponent from './InputFormComponent';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      chosenTime: '',
      maxTimeNum: 5,
      maxTimeUnit: 'months',
      minTimeNum: 1,
      minTimeUnit: 'days',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      chosenTime,
      maxTimeNum,
      maxTimeUnit,
      minTimeNum,
      minTimeUnit,
    } = this.state;

    const newMinTime = minTimeNum * dateENUM[minTimeUnit];
    const newMaxTime = maxTimeNum * dateENUM[maxTimeUnit];
    let newChosenTime = chosenTime;

    if (newMinTime <= newMaxTime) {
      newChosenTime = prettyms(
        Math.round(newMinTime + Math.random() * (newMaxTime - newMinTime)),
        { verbose: true, unitCount: 2 },
      );
    }

    this.setState({ chosenTime: newChosenTime });
  }

  render() {
    const { chosenTime } = this.state;
    const data = { ...this.state };

    return (
      <div>
        <InputFormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={data}
        />

        <p>{`Time: ${chosenTime}`}</p>
      </div>
    );
  }
}
