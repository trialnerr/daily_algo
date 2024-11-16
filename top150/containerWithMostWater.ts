function maxArea(height: number[]): number {
  let l: number = 0;
  let r: number = height.length - 1;
  let maxWater: number = 0;
  while (l < r) {
    let short: number = height[l] <= height[r] ? l : r;
    const currWater = height[short] * (r - l);
    maxWater = Math.max(currWater, maxWater);
    short == l ? l++ : r--;
  }
  return maxWater;
}
