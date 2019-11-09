import React from 'react';

class City extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.cityName} </h2>
        <p> {this.props.temperature} </p>
      </div>
    );
  }
}

export default City;
