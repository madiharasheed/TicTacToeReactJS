import React from "react";
import { shallow, mount } from "enzyme";

import App from "./app";

describe("App component", () => {
  it("should render game App component", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper).toMatchSnapshot();
  });

  it("player x should start the game", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.state("xTurn")).toEqual(true);
  });

  //size 1 reflects the current empty board
  it("game history should initially be of size one", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.state("history").length).toEqual(1);
  });

  it("number of moves should initially be zero", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.state("moveNumber")).toEqual(0);
  });

  it("when Tile is clicked, game history size should increase by one", () => {
    const appWrapper = mount(<App />);
    expect(appWrapper.state("history").length).toEqual(1);
    const tileWrapper = appWrapper.find("Tile").at(0);
    tileWrapper.find("button.tile").simulate("click");
    expect(appWrapper.state("history").length).toEqual(2);
  });

  it("when Tile is clicked while game is not over, number of moves should increase by one", () => {
    const appWrapper = mount(<App />);
    expect(appWrapper.state("moveNumber")).toEqual(0);
    const tileWrapper = appWrapper.find("Tile").at(0);
    tileWrapper.find("button.tile").simulate("click");
    expect(appWrapper.state("moveNumber")).toEqual(1);
  });

  it("a Tile should initially be emtpy", () => {
    const appWrapper = mount(<App />);
    const tileButton = appWrapper.find("button.tile").at(0);
    expect(tileButton.text()).toEqual("");
  });

  it("playing on an empty Tile should change its value", () => {
    const appWrapper = mount(<App />);
    const tileButton = appWrapper.find("button.tile").at(0);
    const tileButtonOriginalValue = tileButton.text();
    tileButton.simulate("click");
    const tileButtonValueAfterOneClick = tileButton.text();
    expect(tileButtonOriginalValue === tileButtonValueAfterOneClick).toEqual(
      false
    );
  });

  it("playing on an occupied Tile should not change its value", () => {
    const appWrapper = mount(<App />);
    const tileButton = appWrapper.find("button.tile").at(0);
    const tileButtonOriginalValue = tileButton.text();
    tileButton.simulate("click");
    const tileButtonValueAfterOneClick = tileButton.text();
    tileButton.simulate("click");
    const tileButtonValueAfterTwoClicks = tileButton.text();
    expect(tileButtonOriginalValue === tileButtonValueAfterOneClick).toEqual(
      false
    );
    expect(
      tileButtonValueAfterOneClick === tileButtonValueAfterTwoClicks
    ).toEqual(true);
  });

  it("players should take turns", () => {
    const appWrapper = mount(<App />);
    expect(appWrapper.state("xTurn")).toEqual(true);
    appWrapper
      .find("button.tile")
      .at(0)
      .simulate("click");
    expect(appWrapper.state("xTurn")).toEqual(false);
    appWrapper
      .find("button.tile")
      .at(1)
      .simulate("click");
    expect(appWrapper.state("xTurn")).toEqual(true);
  });
});
