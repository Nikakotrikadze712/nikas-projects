//მომხმარებელს შემოატანინეთ რიცხვი. თუ რიცხვი მეტია 200-ზე დააბრუნეთ ამ რიცხვის 5%. თუ 150-დან 200-მდეა მაშინ ამ რიცხვის 50%. თუ 100-დან 150-მდეა მაშინ 75%. თუ 100-ზე ნაკლებია მაშინ 80%. სხვა შემთხვევაში 'არასწორი რიცხვი'
let number = Number(prompt('enter number'))

let result =
    number > 200 ? number * 0.05 :
    number >= 150 && number <= 200 ? number * 0.5 :
    number >= 100 && number < 150 ? number * 0.75 :
    number > 0 && number < 100 ? number * 0.8 :
    'invalid number'

console.log(result)