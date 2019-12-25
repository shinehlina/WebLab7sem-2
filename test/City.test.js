import React from "react";
import City from "../src/components/City";
import { shallow } from "./enzyme";
import { shallowToJson } from "enzyme-to-json";

let favoriteCity = {
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
};
it("City didn't changed", () => {
  const app = shallow(
    <City
      index={0}
      cityName={favoriteCity.cityName}
      isFetching={false}
      errorMessage={""}
      cityInfo={favoriteCity.data}
      deleteCity={() => undefined}
    />
  );
  expect(shallowToJson(app)).toMatchSnapshot();
});

it("City loading didn't changed", () => {
  const app = shallow(
    <City
      index={0}
      cityName={favoriteCity.cityName}
      isFetching={true}
      errorMessage={""}
      cityInfo={undefined}
      deleteCity={() => undefined}
    />
  );
  expect(shallowToJson(app)).toMatchSnapshot();
});

it("City with error didn't changed", () => {
  const app = shallow(
    <City
      index={0}
      cityName={favoriteCity.cityName}
      isFetching={false}
      errorMessage={"Error"}
      cityInfo={undefined}
      deleteCity={() => undefined}
    />
  );
  expect(shallowToJson(app)).toMatchSnapshot();
});
