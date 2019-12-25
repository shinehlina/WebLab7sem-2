import React from "react";
import { Button, Icon } from "react-materialize";
import CityDescription from "./CityDescription";
import { Preloader } from "react-materialize";
import {Col, Modal } from "react-materialize";

class City extends React.Component {
  render() {
    return (
      <div>
        {this.props.errorMessage !== "" ? (
          <Modal header="Error" open>
            {this.props.errorMessage}{" "}
          </Modal>
        ) : (
          this.createCityOrPreloader()
        )}
      </div>
    );
  }
  createCityOrPreloader() {
    return (
      <div className="center-align">
        {this.props.isFetching ? <Preloader size="big" /> : this.createCity()}
      </div>
    );
  }

  createCity() {
    return (
      <div>
        <Col s={3} m={3} className="valign-wrapper">
          <h6> {this.props.cityName} </h6>
        </Col>
        <Col s={3} m={3} className="valign-wrapper">
          <h6 style={{ fontWeight: "bold", float: "right" }}>
            {Math.round(this.props.cityInfo.main.temp - 273)}˚С
          </h6>
        </Col>
        <Col s={4} m={3} className="valign-wrapper">
          <img
            alt="icon"
            src={
              "https://openweathermap.org/img/wn/" +
              this.props.cityInfo.weather[0].icon +
              ".png"
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
            onClick={() => this.props.deleteCity(this.props.index, this.props.cityName)}
          />
        </Col>

        <CityDescription
          longtitude={this.props.cityInfo.coord.lon}
          latitude={this.props.cityInfo.coord.lat}
          description={this.props.cityInfo.weather[0].description}
          temperature={this.props.cityInfo.main.temp}
          humidity={this.props.cityInfo.main.humidity}
          windSpeed={this.props.cityInfo.wind.speed}
          pressure={this.props.cityInfo.main.pressure}
        />
      </div>
    );
  }
}

export default City;