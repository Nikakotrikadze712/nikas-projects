function derive(coefficient,exponent) {
  let newCoefficient = coefficient * exponent
  let newExponent = exponent - 1

  let result = newCoefficient + "x^" + newExponent
  return result
}