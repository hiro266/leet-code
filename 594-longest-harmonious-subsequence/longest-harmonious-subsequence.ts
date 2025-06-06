function findLHS(nums: number[]): number {
  let answer = 0;
  if (nums.every((num) => num === nums[0])) return answer;

  nums.sort((a, b) => a - b);
  const seen = new Map();

  for (const num of nums) {
    if (seen.has(num)) {
      seen.set(num, seen.get(num) + 1);
    } else {
      seen.set(num, 1);
    }
  }

  for (const [key, count] of Array.from(seen)) {
    if (seen.has(key + 1)) {
      const sum = count + seen.get(key + 1);
      if (answer < sum) answer = sum;
    }
  }

  return answer;
};