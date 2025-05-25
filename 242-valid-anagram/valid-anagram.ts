function isAnagram(s: string, t: string): boolean {
  const formattedS = s.split("").sort().join("");
  const formattedT = t.split("").sort().join("");
  return formattedS === formattedT;
};