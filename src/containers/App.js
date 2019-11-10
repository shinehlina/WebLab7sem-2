import React from "react";
import MainCity from "../components/MainCity";
import { connect } from "react-redux";
import { addFavoriteCity, deleteFavoriteCity } from "../actions/favoriteCitiesAction";
import CityList from "./CityList";
import {getMainCity} from "../actions/mainLocationCity"
// import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <MainCity mainCity={this.props.mainCity.mainCity} /> */}
        <CityList
          favoriteCities={this.props.favoriteCities.favoriteCities}
          isFetching={this.props.favoriteCities.isFetching}
          addCity={this.props.addFavoriteAction}
          deleteCity={this.props.deleteFavoriteAction}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    // mainCity: store.mainCity,
    favoriteCities: store.favoriteCities,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteAction: cityName => dispatch(addFavoriteCity(cityName)),
    deleteFavoriteAction: cityIndex => dispatch(deleteFavoriteCity(cityIndex))
    // getMainCityAction: () => dispatch(getMainCity())
  };
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
