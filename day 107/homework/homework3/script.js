//შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ რიცხვზე დაგვიბრუნებს ზუსტად ამოდის თუ არა ფესვი, თუ არ ამოდის მაშინ ამ რიცხვს აიყვანს კვადრატში (ტერნარი გამოიყენეთ).
let squareroot1 = (num1) => {
    let root1 = Math.sqrt (num1)
    root1 %1 === 0 ? console.log (root1) : console.log (num1 * num1)
}
let squareroot2 = function (num2) {
    let root2 = Math.sqrt (num2)
    root2 %1 === 0 ? console.log (root2) : console.log (num2 * num2)
} 

console.log (squareroot1 (4))
console.log (squareroot2 (10))