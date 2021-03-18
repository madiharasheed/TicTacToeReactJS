import React from "react";
import { shallow } from "enzyme";

import Board from "./board";
// Describing Board Components
describe("Board component", () => {
  it("should render Board component", () => {
    const mockCallBack = jest.fn();
    const boardWrapper = shallow(
      <Board tiles={Array(9).fill(null)} onClick={mockCallBack} />
    );
    expect(boardWrapper).toMatchSnapshot();
  });

  it("should have nine tiles", () => {
    const mockCallBack = jest.fn();
    const boardWrapper = shallow(
      <Board tiles={Array(9).fill(null)} onClick={mockCallBack} />
    );
    expect(boardWrapper.find("Tile").length).toEqual(9);
  });
});
