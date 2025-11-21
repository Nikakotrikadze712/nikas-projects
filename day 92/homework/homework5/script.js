//მოცემული გაქვთ სია: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]მომხმარებელს შემოატანინეთ ორი რიცხვი. შემოტანილი რიცხვებიდან, ყველაზე პატარა რიცხვი, რომელიც იქნება,  იმ რიცხვიდან გამოიტანეთ მეორე რიცხვის ჩათვლით ყველა ელემენტი, ინდექსების მიხედვით.
let list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
let num1 = Number(prompt('enter first number from 10 to 150:'))
let num2 = Number(prompt('enter second number from 10 to 150:'))
let index1, index2
if (num1 <= num2) {
    index1 = num1
    index2 = num2
} else {
    index1 = num2
    index2 = num1
}
let result = list.slice(index1, index2 + 1)
console.log(result)