const getRomanNum = (value: number): [string, number] => {
  // 1000~
  if (value >= 1000) {
    return ["M", 1000];
    // 999 ~ 900
  } else if (value < 1000 && value > 899) {
    return ["CM", 900];
    // 899 ~ 500
  } else if (value < 900 && value > 499) {
    return ["D", 500];
    // 499 ~ 400
  } else if (value < 500 && value > 399) {
    return ["CD", 400];
    // 399 ~ 100
  } else if (value < 400 && value > 99) {
    return ["C", 100];
    // 99 ~ 90
  } else if (value < 100 && value > 89) {
    return ["XC", 90];
    // 89 ~ 50
  } else if (value < 90 && value > 49) {
    return ["L", 50];
    // 49 ~ 40
  } else if (value < 50 && value > 39) {
    return ["XL", 40];
    // 39 ~ 10
  } else if (value < 40 && value > 9) {
    return ["X", 10];
    // 9 ~ 6
  } else if (value === 9) {
    return ["IX", 9];
    // 5 ~ 4
  } else if (value < 9 && value > 4) {
    return ["V", 5];
    //
  } else if (value === 4) {
    return ["IV", 4];
    // 3 ~ 1
  } else if (value < 4 && value > 0) {
    return ["I", 1];
  } else {
    return ["hoge", 1000000];
  }
};

function intToRoman(num: number): string {
  let currentValue = num;
  const romanNumerals = [];

  while (currentValue > 0) {
    const [romanNum, value] = getRomanNum(currentValue);
    romanNumerals.push(romanNum);
    currentValue = currentValue - value;
  }

  return romanNumerals.join("");
    
};