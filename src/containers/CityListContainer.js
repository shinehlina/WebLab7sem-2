import React from "react";
import CityList from "../components/CityList";
import { connect } from "react-redux";
import {
  getCityInfo,
  deleteFavoriteCity,
  fetchCitiesNames
} from "../actions/favoriteCitiesAction";

class CityListContainer extends React.Component {
  render() {
    return (
      <CityList
        favoriteCities={this.props.favoriteCities.favoriteCities}
        areFetching={this.props.favoriteCities.areFetching}
        error={this.props.favoriteCities.errorMessage}
        addCity={this.props.addFavoriteAction}
        deleteCity={this.props.deleteFavoriteAction}
        getCityList={this.props.getCityList}
      />
    );
  }
}
const mapStateToProps = store => {
  return {
    favoriteCities: store.favoriteCities,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteAction: cityName => dispatch(getCityInfo(cityName)),
    deleteFavoriteAction: (cityIndex, cityName) => dispatch(deleteFavoriteCity(cityIndex, cityName)),
    getCityList: () => dispatch(fetchCitiesNames())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityListContainer);