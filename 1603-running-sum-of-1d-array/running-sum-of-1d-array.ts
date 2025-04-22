function runningSum(nums: number[]): number[] {
    let output: number[] = [];
    let sum: number;
    nums.forEach((num, index) => {
        if (index === 0) {
        output.push(num);
        sum = num;
        return;
        }

        sum += num;
        output.push(sum);
    });
    return output
};