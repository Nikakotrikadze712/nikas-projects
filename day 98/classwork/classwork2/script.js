function vaporcode(string) {
  let str = ''
  string = string.toUpperCase()
  for (let i = 0;i < string.length;i++) {
    if (string[i] !== ' '){
      str += string[i] + '  '
    }
  }
  return str.slice(0, -2)
}