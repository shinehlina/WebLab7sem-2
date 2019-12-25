import React from "react";
import MainCityContainer from "../src/containers/MainCityContainer";
import { shallow } from "./enzyme";
import { shallowToJson } from "enzyme-to-json";
import configureStore from "redux-mock-store";
import { favoriteCities } from "./CityList.test";

const initialState = {};
const mockStore = configureStore();

describe("MainCityContainer didn't change ", function() {
  it("Empty storage", () => {
    const storage = [];
    const store = mockStore(initialState);
    const tree = shallow(<MainCityContainer value={storage} store={store} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it("Storage has elements", () => {
    const storage = favoriteCities;
    const store = mockStore(initialState);
    const tree = shallow(<MainCityContainer value={storage} store={store} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
