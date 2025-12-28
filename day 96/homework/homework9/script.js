function solution(str, ending){
  if (ending === "") {
    return true
  }
  if (str.length < ending.length) {
    return false
  }
  for (let i = 0; i < ending.length; i++) {
    if (str [str.length - ending.length + i] !== ending [i]) {
      return false
    }
  }
  return true
}