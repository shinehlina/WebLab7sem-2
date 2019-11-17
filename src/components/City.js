import React from "react";
import { Button, Icon } from "react-materialize";
import CityDescription from "./CityDescription";

class City extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.cityName} </h2>
        <Button
          floating
          large
          className="grey darken-1"
          waves="light"
          icon={<Icon> remove </Icon>}
          onClick={() => this.props.deleteCity(this.props.index)}
        />
        <CityDescription
          longtitude={this.props.longtitude}
          latitude={this.props.latitude}
          description={this.props.description}
          temperature={this.props.temperature}
          humidity={this.props.humidity}
          windSpeed={this.props.windSpeed}
          pressure={this.props.pressure}
        />
      </div>
    );
  }
}

export default City;
