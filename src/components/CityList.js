import React from "react";
import City from "./City";
import { Preloader } from "react-materialize";
import { Row, Col, Modal } from "react-materialize";

class CityList extends React.Component {
  onBtnClick = e => {
    if (e.keyCode === 13) {
      const city = e.target.value;
      if (
        !this.props.favoriteCities
          .map(c => c.cityName.toUpperCase())
          .includes(city.toUpperCase())
      ) {
        this.props.addCity(city);
      }
      e.target.value = "";
      e.preventDefault();
    }
  };

  createList(props) {
    if (props.favoriteCities.length === 0) {
      return <h4 className="center-align">No favorite cities</h4>;
    }
    let cityList = [];
    for (let i = 0; i < props.favoriteCities.length; i++) {
      let cityInfo1 = props.favoriteCities[i];

      cityList.push(
        <Col key={cityInfo1.cityName} s={12} m={6}>
          <City
            index={i}
            cityName={cityInfo1.cityName}
            longtitude={cityInfo1.data.coord.lon}
            latitude={cityInfo1.data.coord.lat}
            description={cityInfo1.data.weather[0].description}
            windSpeed={cityInfo1.data.wind.speed}
            temperature={cityInfo1.data.main.temp}
            humidity={cityInfo1.data.main.humidity}
            pressure={cityInfo1.data.main.pressure}
            icon={cityInfo1.data.weather[0].icon}
            deleteCity={props.deleteCity}
          />
        </Col>
      );
    }
    return cityList;
  }

  render() {
    return (
      <div>
        {this.props.errorMessage !== "" ? (
          <Modal header="Error" open>
            {this.props.errorMessage}{" "}
          </Modal>
        ) : null}
        <Row>
          <Col className="valign-wrapper" s={6}>
            <h5 className="">Favorites</h5>
          </Col>
          <Col className="valign-wrapper" s={6}>
            <form>
              <input
                id="city"
                type="text"
                size="40"
                placeholder="Enter your city"
                onKeyDown={this.onBtnClick}
              />
            </form>
          </Col>
        </Row>
        {this.props.isFetching ? (
          <div className="center-align">
            <Preloader size="big" />
          </div>
        ) : (
          <Row>{this.createList(this.props)}</Row>
        )}
      </div>
    );
  }
}

export default CityList;
