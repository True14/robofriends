import React from "react";
import { shallow } from "enzyme";
import ErrorBoundry from "./ErrorBoundry";

describe("when no JS errors are caught in a child component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(
      <ErrorBoundry>
        <h1>hello</h1>
      </ErrorBoundry>
    );
  });

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("when JS errors are caught in a child component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(
      <ErrorBoundry>
        <h1>hello</h1>
      </ErrorBoundry>
    );
    wrapper.instance().componentDidCatch("oh no an error!");
    wrapper.update();
  });

  it("should update the state to indicate an error", () => {
    expect(wrapper.instance().state.hasError).toEqual(true);
  });
});
