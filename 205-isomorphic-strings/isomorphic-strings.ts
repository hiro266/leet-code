function isIsomorphic(s: string, t: string): boolean {
  const map = new Map();
  const reverseMap = new Map();

  const leftSplit = s.split("");
  const rightSplit = t.split("");

  for (let i = 0; i < leftSplit.length; i++) {
    if (map.has(leftSplit[i]) && map.get(leftSplit[i]) !== rightSplit[i]) {
      return false;
    }

    if (
      reverseMap.has(rightSplit[i]) &&
      reverseMap.get(rightSplit[i]) !== leftSplit[i]
    ) {
      return false;
    }

    map.set(leftSplit[i], rightSplit[i]);
    reverseMap.set(rightSplit[i], leftSplit[i]);
  }
  return true;
};