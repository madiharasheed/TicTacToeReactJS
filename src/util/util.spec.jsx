import { calculateWinner, calculateTie, genericWinnerCalculator } from "./util";

it("should be a win", () => {
  const tiles = Array(9).fill(null);
  tiles[0] = "X";
  tiles[4] = "X";
  tiles[8] = "X";
  expect(calculateWinner(tiles)).toEqual("X");
  expect(genericWinnerCalculator(tiles)).toEqual("X");
});

it("should not be a win", () => {
  const tiles = Array(9).fill(null);
  tiles[1] = "X";
  tiles[4] = "O";
  tiles[5] = "X";
  tiles[7] = "X";
  tiles[8] = "O";
  expect(calculateWinner(tiles)).toEqual(null);
  expect(genericWinnerCalculator(tiles)).toEqual(null);
});

it("should be a tie", () => {
  const tiles = Array(9).fill(null);
  tiles[0] = "X";
  tiles[1] = "O";
  tiles[2] = "X";
  tiles[3] = "O";
  tiles[4] = "X";
  tiles[5] = "X";
  tiles[6] = "O";
  tiles[7] = "X";
  tiles[8] = "O";

  expect(calculateTie(tiles)).toEqual(true);
});
