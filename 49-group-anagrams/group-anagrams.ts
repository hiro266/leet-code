function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }

    const getKey = map.get(key);
    if (getKey !== undefined) {
      getKey.push(str);
    }
  }

  console.log(map);
  console.log([map.keys()]);
  console.log([map.values()]);
  console.log(Array.from(map.values()));

  return Array.from(map.values());
};