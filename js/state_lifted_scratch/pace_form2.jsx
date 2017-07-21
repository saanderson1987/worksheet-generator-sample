import React from 'react';

class PaceForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleIntervalSelect = this.handleIntervalSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.props.onInputChange(name, value);
  }

  handleIntervalSelect(event) {
    this.props.onIntervalChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Distance:</p>
        <input
          name='distance'
          onChange={this.handleInputChange}
          value={this.props.distance}/>
        <span>mi</span>
        <p>Goal Time:</p>
        <input
          name='goalMin'
          onChange={this.handleInputChange}
          value={this.props.goalMin}/>
        <span>min</span>
        <input
          name='goalSec'
          onChange={this.handleInputChange}
          value={this.props.goalSec}
          />
        <span>sec</span>
        <p>Interval:</p>
        <select
          value={this.props.mileInterval}
          onChange={this.handleIntervalSelect}>
          <option value='0.125'>1/8</option>
          <option value='0.25'>1/4</option>
          <option value='0.3333333333333333'>1/3</option>
          <option value='0.5'>1/2</option>
          <option value='1'>1</option>
        </select>
        <span>mi</span>
        <p></p>
        <input type="submit" value="Submit"/>
      </form>
    );
  }

}

export default PaceForm;
