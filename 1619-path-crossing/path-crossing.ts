function isPathCrossing(path: string): boolean {
  const seen = new Set();
  let x = 0,
    y = 0;
  seen.add(JSON.stringify([x, y]));

  const convertStr = (x: number, y: number): string => {
    return JSON.stringify([x, y]);
  };

  const isVisitedLocation = (x: number, y: number): boolean => {
    const location = convertStr(x, y);
    if (seen.has(location)) return true;
    seen.add(location);
    return false;
  };

  for (const compass of path) {
    switch (compass) {
      case "E": {
        // 第一引数(x)を+
        x++;
        if (isVisitedLocation(x, y)) return true;
        break;
      }
      case "W": {
        // 第一引数(x)を-
        x--;
        if (isVisitedLocation(x, y)) return true;
        break;
      }
      case "N": {
        // 第二引数(y)を+
        y++;
        if (isVisitedLocation(x, y)) return true;
        break;
      }
      case "S": {
        // 第二引数(y)を-
        y--;
        if (isVisitedLocation(x, y)) return true;
        break;
      }
    }
  }

  return false;

};