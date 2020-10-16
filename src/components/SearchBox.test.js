import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

describe("The SearchBox component", () => {
  let wrapper;
  let searchChange;
  beforeEach(() => {
    searchChange = jest.fn();
    wrapper = shallow(<SearchBox searchChange={searchChange} />);
  });

  it("renders withouth crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has a input field with id 'search-box", () => {
    expect(wrapper.find("input#search-box")).toHaveLength(1);
  });

  it("calls searchChange from props when input field is changed", () => {
    wrapper
      .find("input#search-box")
      .simulate("change", { target: { value: "john" } });
    expect(searchChange).toHaveBeenCalledTimes(1);
  });
});
