import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

describe("Test MainPage Component", () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      searchField: "sample text",
      onSearchChange: jest.fn(),
      onRequestRobots: jest.fn(),
      robots: [],
      isPending: false
    };

    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it("should render the main page without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the main page without crashing when isPending is true", () => {
    const isPendingTrue = {
      searchField: "sample text",
      onSearchChange: jest.fn(),
      onRequestRobots: jest.fn(),
      robots: [],
      isPending: true
    };
    const isPendingTrueWrapper = shallow(<MainPage {...isPendingTrue} />);
    expect(isPendingTrueWrapper).toMatchSnapshot();
  });

  it("filters robots correctly", () => {
    const mockProps2 = {
      searchField: "john",
      onSearchChange: jest.fn(),
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: "John",
          email: "john@gmail.com"
        }
      ],
      isPending: false
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filterRobots()).toEqual([
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ]);
  });

  it("filters robots correctly 2", () => {
    const mockProps3 = {
      searchField: "a",
      onSearchChange: jest.fn(),
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: "John",
          email: "john@gmail.com"
        }
      ],
      isPending: false
    };
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filterRobots()).toEqual([]);
  });
});
