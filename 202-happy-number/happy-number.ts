// 桁を分解し配列にして返す
const extractDigits = (n: number) => {
  return String(n)
    .split("")
    .map((str) => Number(str));
};

function isHappy(n: number): boolean {

  const set = new Set();
  set.add(n);
  let extractedDigits = extractDigits(n);

  while (true) {
    // 分解した桁をそれぞれ二乗して合算する
    let squaredValue = 0;
    for (const digits of extractedDigits) {
      squaredValue += Math.pow(digits, 2);
    }

    // 1になったら、HappyNumber
    if (squaredValue === 1) return true;
    // 同値になったらループと判定し、NotHappyNumber
    if (set.has(squaredValue)) return false;
    // 引数が1桁の場合の処理
    if (squaredValue === n) squaredValue = Math.pow(squaredValue, 2);

    set.add(squaredValue);
    extractedDigits = extractDigits(squaredValue);
  }

};