import React from "react";
import { shallow } from "enzyme";

import Info from "./info";

describe("Info Component", () => {
  it("should render Info component", () => {
    const infoWrapper = shallow(<Info />);
    expect(infoWrapper).toMatchSnapshot();
  });
});
