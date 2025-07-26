function countPoints(rings: string): number {
  const ringsCount: Map<string, Record<string, number>> = new Map()
  const split = rings.match(/.{1,2}/g) || []; // 2文字ずつマッチさせて区切る

  for (const ring of split) {
    const color = ring[0]; // "R", "G", "B"
    const position = ring[1]; // "0", "6", "9" など

    const current = ringsCount.get(position) || { R: 0, G: 0, B: 0 };
    current[color] += 1;
    ringsCount.set(position, current);
  }

  let result = 0
  for (const [_, countMap] of ringsCount) {
    if (Object.values(countMap).includes((0))) continue
    result++
  }

  return result
};