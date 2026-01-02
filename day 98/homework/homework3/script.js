function digitalRoot(n) {
    while (n > 9) {
    let sum = 0
    while (n > 0) {
      sum = sum + (n % 10)
      n = (n - (n % 10)) / 10
    }
    n = sum
  }
  return n
}