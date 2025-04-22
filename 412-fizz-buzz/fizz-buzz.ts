function fizzBuzz(n: number): string[] {
  let output: string[] = [];

  for (let i = 1; i <= n; i++) {
    const divisibleBy3 = i % 3 === 0;
    const divisibleBy5 = i % 5 === 0;

    let currentStr = "";

    if (divisibleBy3) currentStr += "Fizz";
    if (divisibleBy5) currentStr += "Buzz";
    if (currentStr == "") currentStr += i;

    output.push(currentStr);
  }
  return output
};