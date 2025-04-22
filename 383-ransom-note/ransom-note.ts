function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomNoteSplit = ransomNote.split("");
  const magazineSplit = magazine.split("");

  magazineSplit.forEach((magzineStr) => {
    let isNotEmpty = ransomNoteSplit.includes(magzineStr);
    if (isNotEmpty) {
      ransomNoteSplit.splice(ransomNoteSplit.indexOf(magzineStr), 1);
    }
  });

  console.log("ransomNoteSplit", ransomNoteSplit);
  console.log("magazineSplit", magazineSplit);

  if (ransomNoteSplit.length === 0) return true;
  return false;

};