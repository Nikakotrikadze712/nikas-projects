//მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ არის თუ არა 3-ის ჯერადი.
let number = Number(prompt('enter any number: '))

if(number %3 == 0) {
    console.log(number)
}

else if(number <= 0) {
    console.log('your number is lower than 3')
}

else {
    let number = Number(prompt('enter any number: '))
}