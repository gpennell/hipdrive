import { addWeights, calcWarmupSets } from "./WeightCalcs";

describe("addWeights", () => {
  it("should calculate which plates need to be added to each side of the bar", () => {
    const barWeight = 45;
    const targetWeight = 225;
    const availablePlates = [2.5, 5, 10, 25, 35, 45];
    const expected = [45, 45];

    const result = addWeights(barWeight, targetWeight, availablePlates);

    expect(result).toEqual(expected);
  }),
    it("should return an empty array if no plates are added", () => {
      const barWeight = 45;
      const targetWeight = 45;
      const availablePlates = [2.5, 5, 10, 25, 35, 45];
      const expected: number[] = [];

      const result = addWeights(barWeight, targetWeight, availablePlates);

      expect(result).toEqual(expected);
    });
});

describe("calcWarmupSets", () => {
  it("should have the last warmup set be the given percent off of the work set weight", () => {
    const result = calcWarmupSets(4, 45, 0.1, 225);
    expect(result[result.length - 1]).toEqual(202.5);
  });
});
