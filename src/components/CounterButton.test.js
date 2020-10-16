import { mount } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";
const mockColor = "red";
const wrapper = mount(<CounterButton color={mockColor} />);
it("expects to render CounterButton component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("has a button", () => {
  expect(wrapper.find('[id="counter"]').length).toEqual(1);
});

it("increments count in state", () => {
  expect(wrapper.find('[id="counter"]').text()).toBe("Count: 0");
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.find('[id="counter"]').text()).toBe("Count: 1");
});
