function parse(data){
  let value = 0
  let result = []
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'i') {
      value = value + 1
    }
    else if (data[i] === 'd') {
      value = value - 1
    }
    else if (data[i] === 's') {
      value = value * value
    }
    else if (data[i] === 'o') {
      result.push(value)
    }
  }
  return result
}