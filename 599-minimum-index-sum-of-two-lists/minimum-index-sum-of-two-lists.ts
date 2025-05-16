const main = (list1: string[], list2: string[]): string[] => {
  const map1 = new Map();

  for (let i = 0; i < list1.length; i++) {
    map1.set(list1[i], i);
  }

  const map2 = new Map();
  for (let j = 0; j < list2.length; j++) {
    if (map1.has(list2[j])) {
      map2.set(list2[j], map1.get(list2[j] + j));
    }
  }

  // todo: map2のvalueで最も小さい値のkeyを配列にして返す

  return list1;
};

main(
  ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
);

main(
  ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  ["KFC", "Shogun", "Burger King"]
);

main(["happy", "sad", "good"], ["sad", "happy", "good"]);
