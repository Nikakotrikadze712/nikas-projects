function validateNumber(str){
  if (str == "") {
    return "Plenty more fish in the sea"
  }

  let number = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] != "-") {
      number += str[i]
    }
  }

  if (number.length == 11 && number[0] == "0" && number[1] == "7") {
    return "In with a chance"
  }
  
  if (number.length == 13 && number[0] == "+" && number[1] == "4" && number[2] == "4" && number[3] == "7") {
    return "In with a chance"
  }

  return "Plenty more fish in the sea"
}