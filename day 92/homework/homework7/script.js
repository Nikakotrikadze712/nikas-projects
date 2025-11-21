//მოცემული გაქვთ სია [[1, 0, 0, 1, 0], [0, 1, 0, 0, 0],  [0, 1, 0, 0, 1]] ერთი სია არის და ამ სიის შიგნით სამი სია,თითოეული ეს სია შეაერთეთ და გადაიყვანეთ ათობით სისტემაში. შემდეგ დაალაგეთ კლებადობით.
let list = [[1, 0, 0, 1, 0], [0, 1, 0, 0, 0],  [0, 1, 0, 0, 1]]

i = 0
j = 0
k = 0

for (let i = 0; i < list.length - 1; i++) {
    let index = i
    for (let j = i + 1; j < list.length; j++) {
        let num1 = 0
        for (let k = 0; k < list[index].length; k++) {
            num1 = num1 * 2 + list[index][k]
        }
        let num2 = 0
        for (let k = 0; k < list[j].length; k++) {
            num2 = num2 * 2 + list[j][k]
        }
        if (num2 > num1) {
            index = j
        }
    }
    if (index !== i) {
        let index2 = list[i]
        list[i] = list[index]
        list[index] = index2
    }
}
console.log(list)