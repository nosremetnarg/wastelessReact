export const calculateWasteSavings = (userInput, mainPercent, wastePercent, wasteReductionPercent) => {
  return userInput * mainPercent * wastePercent * wasteReductionPercent / 10000;
}

export const calculateRevenueUpsales = (userInput, mainPercent) => {
  return userInput * mainPercent * 18 / 10000;
}