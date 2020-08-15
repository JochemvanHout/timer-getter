import React, { Component } from 'react';
import prettyms from 'pretty-ms';
import dateENUM from '../config';
import InputFormComponent from './InputFormComponent';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      chosenTime: '',
      minTimeNum: 1,
      minTimeUnit: 'days',
      maxTimeNum: 5,
      maxTimeUnit: 'months',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      chosenTime, minTimeNum, minTimeUnit, maxTimeNum, maxTimeUnit,
    } = this.state;

    const newMinTime = minTimeNum * dateENUM[minTimeUnit];
    const newMaxTime = maxTimeNum * dateENUM[maxTimeUnit];
    let newChosenTime = chosenTime;

    if (newMinTime <= newMaxTime) {
      newChosenTime = prettyms(Math.round(newMinTime + (Math.random() * (newMaxTime - newMinTime))), { verbose: true, unitCount: 2 });
    }

    this.setState({
      chosenTime: newChosenTime,
    });
  }

  render() {
    return (
      <div>
        <InputFormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />

        <p>
          Time:
          {' '}
          {this.state.chosenTime}
        </p>
      </div>
    );
  }
}
