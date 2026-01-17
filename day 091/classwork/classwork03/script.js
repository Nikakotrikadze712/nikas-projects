//შექმენით 5 ელემენტიანი სია. და მე-3 ინდექსზე დაამატეთ "Goa" და ბოლო ელემენტი წაშალეთ.
let list = ['element1', 'element2', 'element3', 'element4', 'element5']

list.splice(3,0,'Goa')
list.pop()
console.log(list)