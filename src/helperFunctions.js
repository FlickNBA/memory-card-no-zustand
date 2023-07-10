export const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export const generateAll = (amount) => {
  let CI = [...Array(101).keys()];
  CI.shift();
  CI = shuffleArray(CI);
  return CI.slice(0, amount);
};
