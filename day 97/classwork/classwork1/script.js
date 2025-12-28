function twiceAsOld(dadYearsOld, sonYearsOld) {
  let a = dadYearsOld - sonYearsOld * 2
  if (a < 0) {
    return -a
  }
  else {
    return a
  }
}