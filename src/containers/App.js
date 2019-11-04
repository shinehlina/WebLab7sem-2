import React from "react";
import MainCity from "../components/MainCity";
import { connect } from "react-redux";
import { addFavoriteCity } from "../actions/favoriteCitiesAction";
import CityList from "./CityList"
// import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainCity mainCity={this.props.mainCity.mainCity} />
        <CityList favoriteCities={this.props.favoriteCities.favoriteCities} addCity={this.props.addFavoriteAction}/>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store); // посмотрим, что же у нас в store?
  return {
    mainCity: store.mainCity,
    favoriteCities: store.favoriteCities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteAction: cityName => dispatch(addFavoriteCity(cityName))
  };
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// app: {
//   mainCity: "Moscow"
//   favorite: [city1, city2, city3]
// }
