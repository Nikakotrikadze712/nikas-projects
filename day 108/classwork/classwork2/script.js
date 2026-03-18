//შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად ტექსტი, სადაც იქნება რიცხვები, ასოები და სხვა სიმბოლოები. თქვენი მიზანია დაითვალოთ თითოეული მათგანი რამდენჯერ გვხვდება და შემდეგ გადაამრავლოთ ერთმანეთზე. (თუ რომელიმე ერთ-ერთის მნიშვნელობა 0 იქნება მაშინ ამ რიცხვზე არ გადაამრავლოთ)
let countSymbols = text => {
  let letters = 0
  let numbers = 0
  let others = 0

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase()

    if (char >= 'a' && char <= 'z') {
      letters += 1
    } else if (char >= '0' && char <= '9') {
      numbers += 1
    } else {
      others += 1
    }
  }

  let result = 1

  if (letters != 0) {
    result = result * letters
  }

  if (numbers != 0) {
    result = result * numbers
  }

  if (others != 0) {
    result = result * others
  }

  return result
}

console.log(countSymbols('nika8373')) 