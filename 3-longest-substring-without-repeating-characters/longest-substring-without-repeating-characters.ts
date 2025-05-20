function lengthOfLongestSubstring(s: string): number {
  let result: number = 0;
  let set = new Set();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s.codePointAt(right))) {
      set.delete(s.codePointAt(left));
      left++;
    }
    set.add(s.codePointAt(right));
    if (result < set.size) result = set.size;
  }

  return result;
};