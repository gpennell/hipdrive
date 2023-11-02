/**
 * Calculate which plates need to be added to each side of the bar to get the desired target weight
 * @param barWeight - Weight of the bar
 * @param targetWeight - Total weight to be lifted
 * @param availablePlates - Which plates are available to get to the desired weight
 * @returns - Array of plates that need to be added to each side of the bar
 */
export const addWeights = (
  barWeight: number,
  targetWeight: number,
  availablePlates: number[],
): number[] => {
  // Remove duplicate values from availablePlates
  const uniquePlates = [...new Set(availablePlates)];

  // Sort from highest to lowest
  uniquePlates.sort((a, b) => b - a);

  // Keep track of which plates we've added to the bar, and how much total weight
  const plates: number[] = [];
  let totalWeight = 0;

  const targetEachSide = (targetWeight - barWeight) / 2;

  // Keep track of whether we added weight. If we don't add any weight
  // the first pass through, we never will and need to break out.
  let weightWasAdded = false;

  // Keep adding plates until we can't add more
  while (totalWeight < targetEachSide) {
    for (let i = 0; i < uniquePlates.length; i++) {
      if (totalWeight + uniquePlates[i] <= targetEachSide) {
        plates.push(uniquePlates[i]);
        totalWeight += uniquePlates[i];
        weightWasAdded = true;
        break;
      }
    }
    if (weightWasAdded === false) {
      return plates;
    }
    weightWasAdded = false;
  }

  return plates;
};

/**
 * Calculate the warmup sets based on work set weight.
 *
 * Note that the warmup sets are not rounded based on available plates.
 * @param numberOfSets - Number of warmup sets to be done
 * @param firstWarmupSetWeight - Weight of the first warmup set
 * @param lastWarmupRatio - Percent off of work set weight, used to calculate last warmup set
 * @param workSetWeight - Work set weight
 * @returns - Array of warmup set weights, in order of first to last
 */
export const calcWarmupSets = (
  numberOfSets: number,
  firstWarmupSetWeight: number,
  lastWarmupRatio: number,
  workSetWeight: number,
) => {
  // Calculate the weight of the last warmup set
  const lastWarmupSet = workSetWeight - workSetWeight * lastWarmupRatio;

  // Get the increment by which we'll increase each set to get to the final one
  const weightIncrement =
    (lastWarmupSet - firstWarmupSetWeight) / (numberOfSets - 1);

  const warmupSets: number[] = [];
  let warmUpWeight = firstWarmupSetWeight;

  for (let i = 0; i < numberOfSets; i++) {
    warmupSets.push(warmUpWeight);
    warmUpWeight = warmUpWeight + weightIncrement;
  }

  return warmupSets;
};
