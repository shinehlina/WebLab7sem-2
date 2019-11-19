import React from "react";
import City from "../src/components/City";
import { shallow } from './enzyme';
import { shallowToJson } from "enzyme-to-json";

it("City didn't changed", () => {
  const app = shallow(
    <City
      latitude={30}
      longtitude={60}
      description={"windy"}
      temperature={273}
      humidity={20}
      windSpeed={10}
      pressure={1000}
      cityName={"Moscow"}
      icon={1}
      index={0}
    />
  );
  expect(shallowToJson(app)).toMatchSnapshot();
});
