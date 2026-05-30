//შექმენით სია სადაც გექნებათ რიცხვები და სტრინგები. იპოვეთ პირველივე სტრინგ ტიპის ელემენტის ინდექსი და სიიდან ამოშალეთ
let arr = [10, 25, 'hello', 40, 'world', 60]
let index = arr.findIndex(function (item) {
    return typeof item === 'string'
})

if (index !== -1) {
    arr.splice(index, 1)
}

console.log(arr)