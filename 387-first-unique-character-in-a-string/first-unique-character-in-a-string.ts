function firstUniqChar(s: string): number {
  const split = s.split("");
  const map = new Map();

  for (let i = 0; i < split.length; i++) {
    if (map.has(split[i])) {
      map.set(split[i], map.get(split[i]) + 1);
    } else {
      map.set(split[i], 1);
    }
  }

  const iterator = map.values();
  const values = [];

  for (let j = 0; j < map.size; j++) {
    values.push(iterator.next().value);
  }

  const entries = map.entries();
  if (values.every((value) => value > 1)) {
    return -1;
  } else {
    for (const [key, value] of entries) {
      if (value === 1) {
        return s.indexOf(key);
      }
    }
  }

  return 0;
};