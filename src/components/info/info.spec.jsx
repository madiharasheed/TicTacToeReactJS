import React from "react";
import { shallow } from "enzyme";

import Info from "./info";
/*Testing a component as unit */
describe("Info Component", () => {
  it("should render Info component", () => {
    const infoWrapper = shallow(<Info />);
//  const infowrapper = shallow(<info />);  
    expect(infoWrapper).toMatchSnapshot();
  });
});
