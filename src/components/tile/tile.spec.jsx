import React from "react";
import { shallow } from "enzyme";

import Tile from "./tile";

describe("Tile", () => {
  it("should render Tile component", () => {
    const tileWrapper = shallow(<Tile />);
    expect(tileWrapper).toMatchSnapshot();
  });

  it("when Tile is clicked a handler funciton should be called", () => {
    const mockCallBack = jest.fn();
    const tileWrapper = shallow(<Tile onClick={mockCallBack} />);
    tileWrapper.find("button.tile").simulate("click");
    expect(mockCallBack).toHaveBeenCalled();
  });
});
