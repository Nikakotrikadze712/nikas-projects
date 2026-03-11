//მომხმარებელს შემოატანინეთ რიცხვი. თუ რიცხვი არის ლუწი მაშინ აიყვანეთ კუბში, სხვა შემთხვევაში კვადრატში. (Math ობიექტი გამოიყენეთ)
let number = Number(prompt('enter number: '))

number %2 === 0 ? console.log(Math.pow(number, 3)) : console.log(Math.pow(number, 2))