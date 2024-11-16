function twoSum1(numbers: number[], target: number): number[] {
  let p1: number = 0,
    p2: number = numbers.length - 1;
  while (p1 < p2) {
    let num1 = numbers[p1];
    let num2 = numbers[p2];
    if (num1 + num2 == target) {
      return [p1 + 1, p2 + 1];
    } else if (num1 + num2 < target) {
      p1++;
    } else {
      p2--;
    }
  }
}
