function longestCommonPrefix(strs: string[]): string {

  let result = "";
  const split = [];

  for (let i = 0; i < strs.length; i++) {
    split.push(strs[i].split(""));
  }

  for (let j = 0; j < split[0].length; j++) {
    const targetStr = split.map((ele) => ele[j]);
    if (targetStr.every((currentStr) => currentStr === targetStr[0])) {
      result += split[0][j];
    } else {
      break;
    }
  }

  return result;
    
};