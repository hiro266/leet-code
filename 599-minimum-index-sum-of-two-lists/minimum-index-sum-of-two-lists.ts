function findRestaurant(list1: string[], list2: string[]): string[] {

   const map: Map<string, number> = new Map();
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  const filteredItem: Record<string, number> = {};
  for (let j = 0; j < list2.length; j++) {
    const idx = map.get(list2[j]);
    if (map.has(list2[j]) && idx !== undefined) {
      filteredItem[list2[j]] = idx + j;
    }
  }

  const result = [];
  let minIdx = undefined;
  for (const [_, value] of Object.entries(filteredItem)) {
    if (minIdx === undefined) {
      minIdx = value;
    }

    if (value < minIdx) {
      minIdx = value;
    }
  }

  for (const [key, value] of Object.entries(filteredItem)) {
    if (value === minIdx) {
      result.push(key);
    }
  }

  return result;
    
};