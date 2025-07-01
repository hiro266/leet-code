const isWin = (seen: Map<string, string>): boolean => {
  if (
    (seen.has("[0,0]") && seen.has("[1,0]") && seen.has("[2,0]")) || // 縦1
    (seen.has("[0,1]") && seen.has("[1,1]") && seen.has("[2,1]")) || // 縦2
    (seen.has("[0,2]") && seen.has("[1,2]") && seen.has("[2,2]")) || // 縦3
    (seen.has("[0,0]") && seen.has("[0,1]") && seen.has("[0,2]")) || // 横1
    (seen.has("[1,0]") && seen.has("[1,1]") && seen.has("[1,2]")) || // 横2
    (seen.has("[2,0]") && seen.has("[2,1]") && seen.has("[2,2]")) || // 横3
    (seen.has("[0,0]") && seen.has("[1,1]") && seen.has("[2,2]")) || // 斜め(左から)
    (seen.has("[0,2]") && seen.has("[1,1]") && seen.has("[2,0]")) // 斜め(右から)
  ) {
    return true;
  } else {
    return false;
  }
};

function tictactoe(moves: number[][]): string {
  const seen: Map<string, string> = new Map();
  let winUser = "";
  let count: number = 0;

  for (const move of moves) {
    let currentUser = count % 2 === 0 ? "A" : "B";
    seen.set(JSON.stringify(move), currentUser === "A" ? "A" : "B");
    let filteredSeen = new Map(
      Array.from(seen).filter(([_, value]) => value === currentUser)
    );
    // console.log("currentUser:", currentUser);
    // console.log("seen:", seen);
    // console.log("filteredSeen:", filteredSeen);
    // console.log("move:", move);
    // console.log("isWin(filteredSeen):", isWin(filteredSeen));
    // console.log("---------------------------");
    if (isWin(filteredSeen)) {
      winUser = currentUser;
      break;
    }
    count++;
    winUser = count === 9 ? "Draw" : "Pending";
  }

  // console.log("winUser", winUser);
  return winUser;
};