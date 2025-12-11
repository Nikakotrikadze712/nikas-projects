//მოცემული გაქვთ სია [[1, 0, 0, 1, 0], [0, 1, 0, 0, 0],  [0, 1, 0, 0, 1]] ერთი სია არის და ამ სიის შიგნით სამი სია,თითოეული ეს სია შეაერთეთ და გადაიყვანეთ ათობით სისტემაში. შემდეგ დაალაგეთ კლებადობით.
let list = [[1, 0, 0, 1, 0],[0, 1, 0, 0, 0],[0, 1, 0, 0, 1]]

let index1 = []

for (let i = 0; i < list.length; i++) {
    let index2 = 0
    
    for (let j = 0; j < list[i].length; j++) {
        index2 = index2 * 2 + list[i][j]
    }
    
    index1.push(index2)
}

for (let i = 0; i < index1.length; i++) {
    for (let j = 0; j < index1.length - 1; j++) {
        if (index1[j] < index1[j + 1]) {
            let index4 = index1[j]
            index1[j] = index1[j + 1]
            index1[j + 1] = index4
        }
    }
}

console.log(index1)