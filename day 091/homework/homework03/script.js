//შექმენით 5 ელემენტიანი სია, მომხმარებლის შემოტანილი მნიშვნელობა დაამატეთ ამ სიაში იმ შემთხვევაში თუ ეს ელემენტი არ არის სიაში, თუ არის მაშინ ამოშალეთ. და კონსოლში გამოიტანეთ ახალი სია.
let items = ['item1', 'item2', 'item3', 'item4', 'item5']
let userInput = prompt("Enter an item:")
if(items.includes(userInput)) {
    let index = items.indexOf(userInput)
    items.splice(index, 1)
} else {
    items.push(userInput)
}
console.log(items)