function sortPeople(names: string[], heights: number[]): string[] {
  const users: { name: string; height: number }[] = []

  for (let i = 0; i < names.length; i++) {
    users.push({ name: names[i], height: heights[i] })
  }

  users.sort((a, b) => b["height"] - a["height"])
  const result = users.map((user) => user["name"])
  return result
};