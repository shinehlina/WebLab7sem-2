import React from "react";
import { shallow } from "./enzyme";
import { shallowToJson } from "enzyme-to-json";
import CityList from "../src/components/CityList";

export let favoriteCities = [
  {
    cityName: "Kiev",
    data: {
      coord: {
        lon: 30.33,
        lat: 60.03
      },
      weather: [
        {
          main: "Rain",
          description: "light rain",
          icon: "1"
        }
      ],
      main: {
        temp: 278.02,
        pressure: 1028,
        humidity: 93
      },
      wind: {
        speed: 3
      }
    }
  }
];

it("CityList success didn't changed", () => {
  const app = shallow(
    <CityList
      favoriteCities={favoriteCities}
      areFetching={false}
      error={""}
      addCity={() => undefined}
      deleteCity={() => undefined}
      getCityList={() => undefined}
    />
  );
  expect(shallowToJson(app)).toMatchSnapshot();
});

it("CityList error no cities didn't changed", () => {
  const app = shallow(
    <CityList
      areFetching={false}
      favoriteCities={[]}
      error={"Error"}
      addCity={() => undefined}
      deleteCity={() => undefined}
      getCityList={() => undefined}
    />
  );
  expect(shallowToJson(app)).toMatchSnapshot();
});

it("CityList error has cities didn't changed", () => {
  const app = shallow(
    <CityList
      areFetching={false}
      favoriteCities={favoriteCities}
      error={"Error"}
      addCity={() => undefined}
      deleteCity={() => undefined}
      getCityList={() => undefined}
    />
  );
  expect(shallowToJson(app)).toMatchSnapshot();
});

it("CityList loading didn't changed", () => {
  const app = shallow(
    <CityList
      areFetching={true}
      error={""}
      addCity={() => undefined}
      deleteCity={() => undefined}
      getCityList={() => undefined}
    />
  );
  expect(shallowToJson(app)).toMatchSnapshot();
});
