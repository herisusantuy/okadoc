export const multiply = (a, b) => {
  return a * b;
};

export const add = (a, b) => a + b;

export const getPrime = num => {
  let result = [];
  for (let i = 2; i <= num; i++) {
    if (i == 2) {
      result.push(i);
    } else {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        result.push(i);
      }
    }
  }
  if (result.length == 0) {
    return `Data not found!`;
  } else {
    return result.toString();
  }
};

export const getFibonacci = num => {
  let result = [0, 1];
  if (num <= 2) return 1;
  for (let i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.toString();
};

export const isNumeric = value => /^-?\d+$/.test(value);
