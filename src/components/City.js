import React from "react";
import { Button, Icon } from "react-materialize";
import CityDescription from "./CityDescription";
import Col from "react-materialize/lib/Col";

class City extends React.Component {
  render() {
    return (
      <div>
        <Col s={3} m={3} className="valign-wrapper">
          <h6> {this.props.cityName} </h6>
        </Col>
        <Col s={3} m={3} className="valign-wrapper">
          <h6 style={{ fontWeight: "bold", float: "right" }}>
            {Math.round(this.props.temperature - 273)}˚С
          </h6>
        </Col>
        <Col s={4} m={3} className="valign-wrapper">
          <img
            alt="icon"
            src={
              "https://openweathermap.org/img/wn/" + this.props.icon + ".png"
            }
          />
        </Col>
        <Col s={3} m={3} className="valign-wrapper">
          <Button
            floating
            small
            className="grey darken-1"
            waves="light"
            icon={<Icon> remove </Icon>}
            onClick={() => this.props.deleteCity(this.props.index)}
          />
        </Col>

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
