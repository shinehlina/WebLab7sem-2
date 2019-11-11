import React from "react";
import MainCityContainer from "./MainCityContainer";
import CityListContainer from "./CityListContainer";
// import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainCityContainer />
        <CityListContainer />
      </div>
    );
  }
}

export default App;
