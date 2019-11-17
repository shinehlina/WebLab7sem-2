import React from "react";
import City from "../components/City";
import { Preloader} from "react-materialize";

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
      return <div>No favorite cities</div>;
    }
    let cityNameList = [];
    for (let i = 0; i < props.favoriteCities.length; i++) {
      let cityInfo = props.favoriteCities[i];
      if (cityInfo !== null) {
        cityNameList.push(
          <li key={cityInfo.cityName}>
            <City
              index={i}
              cityName={cityInfo.cityName}
              longtitude={cityInfo.data.coord.lon}
              latitude={cityInfo.data.coord.lat}
              description={cityInfo.data.weather[0].description}
              windSpeed={cityInfo.data.wind.speed}
              temperature={cityInfo.data.main.temp}
              humidity={cityInfo.data.main.humidity}
              pressure={cityInfo.data.main.pressure}
              deleteCity={props.deleteCity}
            />
          </li>
        );
      }
    }
    return cityNameList;
  }

  render() {
    return (
      <div>
        <form>
          <input
            id="city"
            type="text"
            size="40"
            placeholder="Enter your city"
            onKeyDown={this.onBtnClick}
          />
        </form>
        <h1>Favorites</h1>
        {this.props.isFetching ? (
          <Preloader size="big" />
        ) : (
          <ul>{this.createList(this.props)}</ul>
        )}
      </div>
    );
  }
}

export default CityList;
