import React from "react";
import { shallow } from "enzyme";

import History from "./history";
// Describing History Components s
describe("History component", () => {
  it("should render History component", () => {
    const mockCallBack = jest.fn();
    const history = [{ tiles: Array(9).fill(null) }];
    const historyWrapper = shallow(
      <History history={history} onClick={mockCallBack} />
    );
   
  });
});
