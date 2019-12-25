import React from "react";
 import MainCity from "../src/components/MainCity";
 import { shallow } from './enzyme';
 import { shallowToJson } from "enzyme-to-json";

 it("MainCity didn't changed", () => {
   let data = {
     isFetching: false,
     error: false,
     mainCityInfo: {
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
   const app = shallow(<MainCity data={data} getMainCity={() => undefined}/>);
   expect(shallowToJson(app)).toMatchSnapshot();
 });

 it("MainCity loading", () => {
   let data = {
     isFetching: true,
     error: false,
   };
   const app = shallow(<MainCity data={data} getMainCity={() => undefined} />);
   expect(shallowToJson(app)).toMatchSnapshot();
 });

 it("MainCity error", () => {
   let data = {
     isFetching: false,
     error: true,
   };
   const app = shallow(<MainCity data={data} getMainCity={() => undefined} />);
   expect(shallowToJson(app)).toMatchSnapshot();
 }); 