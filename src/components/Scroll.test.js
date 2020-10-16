import React from "react";
import { shallow } from "enzyme";
import Scroll from "./Scroll";
import CardList from "./CardList";
describe("Test the Scroll Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Scroll />);
  });
  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("renders child components properly", () => {
    const childrenTestWrapper = shallow(
      <Scroll>
        <CardList robots={[]} />
      </Scroll>
    );
    expect(
      childrenTestWrapper.containsMatchingElement(<CardList robots={[]} />)
    ).toEqual(true);
  });
});
