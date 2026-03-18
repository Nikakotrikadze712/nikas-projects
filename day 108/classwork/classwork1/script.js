//შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა ტექსტი სადაც იქნება როგორც ასოები, ასევე რიცხვები და სხვა დანარჩენი სიმბოლო. ობიექტის სახით დააბრუნეთ ასოები, რიცხვები და სხვა სიმბოლოები რამდენჯერ მეორდება.
let countSymbols = text => {
  let letters = 0
  let numbers = 0
  let others = 0

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase()

    if ((char >= 'a' && char <= 'z')) {
      letters += 1
    } else if (char >= '0' && char <= '9') {
      numbers += 1
    } else {
      others += 1
    }
  }

  return {
    letters: letters,
    numbers: numbers,
    others: others
  }
}

console.log (countSymbols ('nika8373?//'))