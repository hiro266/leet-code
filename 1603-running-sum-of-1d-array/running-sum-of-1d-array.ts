function runningSum(nums: number[]): number[] {
    let output: number[] = [];
    nums.reduce((acc, current) => {
        const sum = acc + current
        output.push(sum)
        // 次のループのaccにはsumの値が返る
        return sum
    }, 0)
    return output
};