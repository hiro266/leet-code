// Time Limit Exceeded のため改善が必要

function smallestChair(times: number[][], targetFriend: number): number {
  // <席番号, 友人>
  const tableStatus: Map<number, number | undefined> = new Map();
  const arrivalTimes = Array.from(times).map(([arrivalTime, _]) => arrivalTime);
  const exitTimes = Array.from(times).map(([_, exitTime]) => exitTime);
  const lastExitTime = Math.max(...exitTimes);

  for (let i = 1; i <= lastExitTime; i++) {
    // 退出処理
    const exitingFriends = exitTimes.reduce((acc: number[], cur, idx) => {
      if (cur === i) acc.push(idx);
      return acc;
    }, []);

    if (exitingFriends.length !== 0) {
      for (const [key, value] of tableStatus.entries()) {
        if (value === undefined) continue;
        if (exitingFriends.includes(value)) {
          tableStatus.set(key, undefined);
        }
      }
    }

    // 到着処理
    const arrivalFriend = arrivalTimes.indexOf(i);
    if (arrivalFriend !== -1) {
      const emptySeat = Array.from(tableStatus.values()).indexOf(undefined);
      const seat = emptySeat !== -1 ? emptySeat : tableStatus.size;
      tableStatus.set(seat, arrivalFriend);

      if (arrivalFriend === targetFriend) {
        return seat;
      }
    }
  }

  throw new Error("Unexpected state: targetFriend not found.");
}

// smallestChair(
//   [
//     [7, 10],
//     [6, 7],
//     [1, 3],
//     [2, 7],
//     [4, 5],
//   ],
//   0
// );

smallestChair(
  [
    [2, 4],
    [4, 9],
    [3, 4],
    [6, 8],
    [5, 10],
  ],
  4
);

// smallestChair(
//   [
//     [1, 4],
//     [2, 3],
//     [4, 6],
//   ],
//   1
// );

// smallestChair(
//   [
//     [3, 10],
//     [1, 5],
//     [2, 6],
//   ],
//   0
// );
