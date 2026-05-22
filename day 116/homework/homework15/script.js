//შექმენი სია სადაც შეინახავთ სხვადასხვა ტიპის მინიმუმ 6 ელემენტს. გადაუარეთ forEach-ით და გამოიტანე თავად ელემენტი და გვერდით ეწეროს მონაცემთა ტიპი
let items = [42, 'hello', true, false, 'Nika', 1]

items.forEach(item => {
    console.log(item, typeof item)
})