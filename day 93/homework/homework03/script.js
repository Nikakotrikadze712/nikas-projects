//მომხმარებელს შემოატანინეთ რიცხვი. და ამ რიცხვის გამყოფები გამოიტანეთ სიის სახით.
let number = Number(prompt('Enter a number: '))

let num = []

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        num.push(i)
    }
}

console.log(num)