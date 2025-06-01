function destCity(paths: string[][]): string {
  const seen = new Set(paths.map((path) => path[0]));
  for (const path of paths) {
    if (!seen.has(path[1])) return path[1];
  }

  throw new Error("unexpected error");

};