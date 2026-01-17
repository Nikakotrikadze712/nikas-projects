//შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად სია. ამ სიაში უნდა იყოს მინიმუმ 5 რიცხვი. ფუნქციამ უნდა დააბრუნოს ამ სიაში მყოფი რიცხვების ჯამი.
function sumofnumbers(list) {
    let sum = 0
    for (let i = 0; i < list.length; i++) {
        sum += list[i]
    }
    return sum
}

console.log(sumofnumbers([1, 2, 3, 4, 5]))