function countCompleteDayPairs(hours: number[]): number {
  let count = 0

  for (let i = 0; i < hours.length; i++) {
    const left = hours[i]
    for (let j = i + 1; j < hours.length; j++) {
      const right = hours[j]

      if ((left + right) % 24 === 0) count++
    }
  }
  return count
};