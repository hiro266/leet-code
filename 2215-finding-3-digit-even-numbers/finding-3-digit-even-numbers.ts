function findEvenNumbers(digits: number[]): number[] {
  const evenNums: Set<number> = new Set()

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        if (i === j || i === k || j === k || digits[i] === 0) continue

        const threeDigits = Number(digits[i].toString() + digits[j].toString() + digits[k].toString())
        if (threeDigits % 2 === 0) evenNums.add(threeDigits)
      }
    }
  }

  return [...evenNums].sort((a, b) => a - b)
};