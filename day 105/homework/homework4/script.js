//გააკეთეთ პატარა თამაში. მომხმარებელმა უნდა შემოიტანოს 1-დან 100-მდე რენდომ რიცხვი. და უნდა გამოიცნოს რენდომ რიცხვი. იმ შემთხვევაში თუ მომხმარებლის შემოტანილ რიცხვს და ჩაფიქრებულ რიცხვს შორის შუალედი 10-ზე ნაკლებია. მიანიშნოს მომხმარებელს რომ გამოცნობასთან ძალიან ახლოს არის. სხვა შემთხვევაში უთხრას მეტია თუ ნაკლები.
let number = Math.floor(Math.random() * 100) + 1

let guess = Number(prompt('Enter number 1-100: '))

if (guess === number) {
    alert('You win!')
}
else {

    let gap = 0

    if (guess > number) {
        gap = guess - number
    }
    else {
        gap = number - guess
    }

    if (gap < 10) {
        alert('You are very close!')
    }
    else {
        if (guess > number) {
            alert('Too high!')
        }
        else {
            alert('Too low!')
        }
    }
}