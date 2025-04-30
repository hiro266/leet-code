function plusOne(digits: number[]): number[] {
  const combinedDigits = BigInt(digits.join(""));
  const splitDigits = String(combinedDigits + BigInt(1)).split("");
  const result: number[] = [];

  for (let i = 0; i < splitDigits.length; i++) {
    result[i] = Number(splitDigits[i]);
  }

  return result;
};