function maximumWealth(accounts: number[][]): number {
  let allBalances: number[] = [];

  accounts.forEach((account) => {
    let totalBalance = 0;
    for (let i = 0; i < account.length; i++) {
      totalBalance += account[i];
    }
    allBalances.push(totalBalance);
  });
  return Math.max(...allBalances);
};