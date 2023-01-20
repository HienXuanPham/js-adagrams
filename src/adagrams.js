const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

const LEN = 26;

export const drawLetters = () => {
  let letterFrequency = {};
  let aHandOfLetters = [];
  while (aHandOfLetters.length < 10) {
    let randomNum = Math.floor(Math.random() * LEN);
    let randomLetter = String.fromCharCode(randomNum + 65);

    if (
      letterFrequency.hasOwnProperty(randomLetter) &&
      letterFrequency[randomLetter] < LETTER_POOL[randomLetter]
    ) {
      aHandOfLetters.push(randomLetter);
      letterFrequency[randomLetter] += 1;
    } else if (!letterFrequency.hasOwnProperty(randomLetter)) {
      aHandOfLetters.push(randomLetter);
      letterFrequency[randomLetter] = 1;
    }
  }
  return aHandOfLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
