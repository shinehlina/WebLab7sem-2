import React from "react";
import City from "../components/City";

class CityList extends React.Component {
  //   rendenCity(name, temperature) {
  //     return <City cityName={name} temperature={temperature} />;
  //   }

  onBtnClick = e => {
    if (e.keyCode === 13) {
      const city = e.target.value;
      this.props.addCity(city);
      e.target.value = "";
      e.preventDefault();
    }
  };

  createList(props) {
    let cityNameList = [];
    for (let i = 0; i < props.favoriteCities.length; i++) {
      let cityInfo = props.favoriteCities[i];
      if (cityInfo !== null) {
        // list.push(this.rendenCity(city.name, city.temperature));
        cityNameList.push(
          <li key={cityInfo.cityName}>
            <City
              cityName={cityInfo.cityName}
              temperature={cityInfo.data.main.temp}
            />
          </li>
        );
      }
    }
    if (cityNameList.length === 0) {
      cityNameList.push(<div>No favorite cities</div>);
    }
    return cityNameList;
  }

  render() {
    return (
      <div>
        <h1> Города </h1>
        <form>
          <input
            id="city"
            type="text"
            size="40"
            placeholder="Enter your city"
            onKeyDown={this.onBtnClick}
          />
        </form>
        {this.props.isFetching ? (
          <p>Загрузка...</p>
        ) : (
          <ul>{this.createList(this.props)}</ul>
        )}
      </div>
    );
  }
}

export default CityList;
