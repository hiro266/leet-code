const main = (licensePlate: string, words: string[]): string => {
  // 小文字 → 分割 → 配列化
  const plateChars = [...licensePlate.toLowerCase()];
  console.log(plateChars);

  const tmp = words.map((word) => {
    for (const wordChar of word) {
      console.log(
        "wordChar is ",
        licensePlate.toLowerCase().includes(wordChar)
      );
    }
    console.log("----------------------------");
  });

  return "";
};

main("1s3 PSt", ["step", "steps", "stripe", "stepple"]);
