import React from "react";
import MainCityContainer from "../containers/MainCityContainer";
import CityListContainer from "../containers/CityListContainer";

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
