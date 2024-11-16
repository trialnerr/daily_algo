function isSubsequence(s: string, t: string): boolean {
  let p1: number = 0,
    p2: number = 0;
  while (p1 < s.length && p2 < t.length) {
    if (s[p1] == t[p2]) {
      p1++;
    }
    p2++;
  }
  return p1 === s.length;
}
