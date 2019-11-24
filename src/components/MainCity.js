import React from "react";
import { Button, Preloader, Col } from "react-materialize";
import CityDescription from "./CityDescription";
import Row from "react-materialize/lib/Row";

class MainCity extends React.Component {
  componentDidMount() {
    this.props.getMainCity();
  }

  render() {
    var needPreolader = this.props.data.isFetching;
    var hasError = this.props.data.error;

    return (
      <div>
        <Row>
          <Button
            waves="light"
            style={{ marginRight: "5px" }}
            onClick={this.props.getMainCity}
          >
            Update geolocation
          </Button>
        </Row>
        {needPreolader ? (
          <div className="center-align">
            <Preloader size="big" />
          </div>
        ) : null}
        {hasError ? <p className="center-align">Error</p> : null}
        {this.createCity()}
      </div>
    );
  }

  createCity() {
    var weather = this.props.data.mainCityInfo;
    if (!this.props.data.isFetching && !this.props.data.error) {
      return (
        <Row>
          <Col m={6} s={12}>
            <h2>{weather.name}</h2>
            <img
              alt="icon"
              src={
                "https://openweathermap.org/img/wn/" +
                weather.weather[0].icon +
                "@2x.png"
              }
            />
            <div style={{ fontSize: "3.9vw", float: "right" }}>
              {Math.round(weather.main.temp - 273)}˚С
            </div>
          </Col>
          <Col m={6} s={12}>
            <CityDescription
              longtitude={weather.coord.lon}
              latitude={weather.coord.lat}
              description={weather.weather[0].description}
              windSpeed={weather.wind.speed}
              temperature={weather.main.temp}
              humidity={weather.main.humidity}
              pressure={weather.main.pressure}
            />
          </Col>
        </Row>
      );
    }
  }
}

export default MainCity;
