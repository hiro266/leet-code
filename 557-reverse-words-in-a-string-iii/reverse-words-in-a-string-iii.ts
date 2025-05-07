function reverseWords(s: string): string {
  return s.split(" ").map((str) => str.split("").reverse().join("")).join(" ")
};