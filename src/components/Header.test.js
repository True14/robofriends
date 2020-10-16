import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Test the Header component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
