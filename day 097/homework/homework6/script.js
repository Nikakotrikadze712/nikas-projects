function disemvowel(str) {
  let result = ""

  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    if (
      char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u" && char !== "A" && char !== "E" && char !== "I" && char !== "O" && char !== "U") {
      result = result + char
    }
  }

  return result
}