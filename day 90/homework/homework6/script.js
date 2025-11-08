//მომხმარებელს შემოატანინეთ რიცხვი და ამ რიცხვის ჩათვლით ყველა რიცხვი გადაამრავლეთ.
let number = Number(prompt('enter any number: '))

let sum = 1

for(let i = 1;i <= number;i++) {
    sum *= i
    console.log(sum)
}