import React from "react";
import { Button, Preloader } from "react-materialize";
import CityDescription from "./CityDescription";

class MainCity extends React.Component {
  componentDidMount() {
    this.props.getMainCity();
  }

  render() {
    var needPreolader = this.props.data.isFetching;
    var hasError = this.props.data.error;

    return (
      <div>
        {needPreolader ? <Preloader size="big" /> : null}
        {hasError ? <p>Ошибка</p> : null}
        <Button
          waves="light"
          style={{ marginRight: "5px" }}
          onClick={this.props.getMainCity}
        >
          Update geolocation
        </Button>
        {this.createCity()}
      </div>
    );
  }

  createCity() {
    var weather = this.props.data.mainCityInfo;
    if (!this.props.data.isFetching && !this.props.data.error) {
      return (
        <div>
          <h2>{weather.name}</h2>
          <CityDescription
            longtitude={weather.coord.lon}
            latitude={weather.coord.lat}
            description={weather.weather.description}
            windSpeed={weather.wind.speed}
            temperature={weather.main.temp}
            humidity={weather.main.humidity}
            pressure={weather.main.pressure}
          />
        </div>
      );
    }
  }
}

export default MainCity;
