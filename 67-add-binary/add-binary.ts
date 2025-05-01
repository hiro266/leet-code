function addBinary(a: string, b: string): string {
  const PREFIX = "0b"

  // プレフィックス0b → 0b以降を2進数であると解釈 → BigIntの引数を10進数に変換
  const sum = BigInt(PREFIX + a) + BigInt(PREFIX + b)
  return sum.toString(2);
};