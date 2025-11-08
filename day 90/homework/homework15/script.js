//შექმენით 20 ელემენტიანი სია. მომხმარებელს შემოატანინეთ რიცხვი და შემოტანილი ინდექსის ჩათვლით გამოიტანეთ ყველა ელემენტი ცალცალკე (While loop) .
let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let number = Number(prompt('enter any number: '))
let i = number

while(i < list.length) {
    console.log(list[i])
    i++
}