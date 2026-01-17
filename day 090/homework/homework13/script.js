//მომხმარებელს შემოატანინეთ რიცხვი, ოღონდ გაიგეთ ეს რიცხვი ათწილადია თუ მთელი.
let num = Number(prompt('enter your number: '))

if(num %1 === 0) {
    console.log('this number is integer')
}
else {
    console.log('this number is float')
}