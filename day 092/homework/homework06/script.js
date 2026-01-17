//მოცემული გაქვთ სია: [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900] ეს სია დაალაგეთ ზრდადობით.
let list = [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900]
for (let i = 0; i < list.length - 1; i++) {
    let index = i
    for (let j = i + 1; j < list.length; j++) {
        if (list[j] < list[index]) {
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