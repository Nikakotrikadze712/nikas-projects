//შექმენით მინიმუმ 5 ელემენტიანი სია, რიცხვებიც იყოს და სტრინგებიც. ამ სიას გადაუარეთ და ყველა რიცხვი გადაამრავლეთ ერთმანეთზე.
let list = [2, 'hello', 3, 'world', 5, '10', 20]

let index = 1

for (let i = 0; i < list.length; i++) {
    let value = list[i]
    let num = Number(value)
    if (num === num) {
        index *= num
    }
}

console.log(index)