import React from "react";
import CityListContainer from "../src/containers/CityListContainer";
import { shallow } from "./enzyme";
import { shallowToJson } from "enzyme-to-json";
import configureStore from "redux-mock-store";
import { favoriteCities } from "./CityList.test";

const initialState = {};
const mockStore = configureStore();

describe("CityListContainer didn't change ", function() {
  it("Empty storage", () => {
    const storage = [];
    const store = mockStore(initialState);
    const tree = shallow(<CityListContainer value={storage} store={store} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it("Storage has elements", () => {
    const storage = favoriteCities;
    const store = mockStore(initialState);
    const tree = shallow(<CityListContainer value={storage} store={store} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
