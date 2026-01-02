function spinWords(string){
  let result = ''
  let word = ''
  for (let i = 0; i <= string.length; i++) {
    if (i == string.length || string[i] == ' ') {
      if (word.length >= 5) {
        let reversed = ''
        for (let j = word.length - 1; j >= 0; j--) {
          reversed = reversed + word[j]
        }
        result = result + reversed
      }
      else {
        result = result + word
      }
      if (i !== string.length) {
        result = result + ' '
      }
      word = ''
    }
    else {
      word = word + string[i]
    }
  }
  return result
}