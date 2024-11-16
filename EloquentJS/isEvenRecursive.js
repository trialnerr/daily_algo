function isEven(n) {
  //base cases
  if (n < 0) return false;
  if (n == 0) return true;
  else if (n == 1) return false;
  else return isEven(n - 2);
}
