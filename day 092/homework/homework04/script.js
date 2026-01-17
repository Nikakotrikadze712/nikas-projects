//მომხმარებელს შემოატანინეთ რიცხვი. შემდეგ სიტყვები შემოატანინეთ იმდენჯერ რა რიცხვიც შემოიტანა. შემდეგ ახალ სიაში ჩაამატეთ ყველა შემოტანილი სიტყვა. და გაფილტრეთ. თუ იქნება ისეთი სიტყვები რომლებიც მეორდება (ქეის სენსიტიურობა არ გაითვალისწინოს) ისინი ამოშალოს.
let number = Number(prompt('enter a number:'))
let list1 = []
for (let i = 0; i < number; i++) {
    let word = prompt('enter a word:')
    list1.push(word)
}
let list2 = []
for (let i = 0; i < list1.length; i++) {
    let word = list1[i]
    if (!list2.includes(word)) {
        list2.push(list1[i])
    }
}
console.log(list2)