function digitize(n) {
  let result = []
  if (n == 0) {
    result = [0]
  }
  while (n > 0) {
    let digit = n % 10
    result [result.length] = digit
    n = (n - digit) / 10
  }
  return result
}