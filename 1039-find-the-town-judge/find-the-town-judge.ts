function findJudge(n: number, trust: number[][]): number {
  const initMap: [number, number][] = [...Array(n)].map((_, i) => [i + 1, 0]);

  const trustCount = new Map(initMap); // 信頼した回数
  const trustedCount = new Map(initMap); // 信頼された回数

  for (const [trustUser, trustedUser] of trust) {
    // 信頼した回数をカウント
    if (trustCount.has(trustUser)) {
      trustCount.set(trustUser, trustCount.get(trustUser)! + 1);
    }

    // 信頼された回数をカウント
    if (trustedCount.has(trustedUser)) {
      trustedCount.set(trustedUser, trustedCount.get(trustedUser)! + 1);
    }
  }

  for (let i = 1; i <= n; i++) {
    if (trustCount.get(i) === 0) {
      if (trustedCount.get(i) === n - 1) return i;
    }
  }

  return -1;

};