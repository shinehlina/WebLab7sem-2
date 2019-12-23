import React from "react";
import City from "./City";
import { Preloader } from "react-materialize";
import { Row, Col, Modal } from "react-materialize";

class CityList extends React.Component {
  componentDidMount() {
    for (var i = 0; i < this.props.favoriteCities; i++) {
      this.props.addCity(this.props.favoriteCities[i].cityName);
    }
  }

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

      if (cityInfo1.errorMessage !== "") {
        var errorMsg = cityInfo1.errorMessage;
        return (
          <Modal header="Error" open>
            {errorMsg}{" "}
          </Modal>
        );
      }

      cityList.push(
        <Col key={cityInfo1.cityName} s={12} m={6}>
          <City
            index={i}
            cityName={cityInfo1.cityName}
            isFetching={cityInfo1.isFetching}
            errorMessage={cityInfo1.errorMessage}
            cityInfo={cityInfo1.cityInfo}
            deleteCity={props.deleteCity}
          />
        </Col>
      );
    }
    return cityList;
  }

  render() {
    if (this.props.error !== "") {
      return (
        <div>
          <Modal header="Error" open>
            {this.props.error}{" "}
          </Modal>
        </div>
      );
    }

    return (
      <div>
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
        {this.props.areFetching ? (
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
