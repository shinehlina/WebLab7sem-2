import React from "react";
 import CityDescription from "../src/components/CityDescription";
 import { shallow } from './enzyme';
 import { shallowToJson } from "enzyme-to-json";

 it("CityDescription didn't changed", () => {
   const app = shallow(
     <CityDescription
       latitude={30}
       longtitude={60}
       description={"windy"}
       temperature={273}
       humidity={20}
       windSpeed={10}
       pressure={1000}
     />
   );
   expect(shallowToJson(app)).toMatchSnapshot();
 });