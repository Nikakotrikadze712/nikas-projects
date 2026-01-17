let list = [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900]

let max = list[0]
for (let i = 1; i < list.length; i++) {
    if (list[i] > max) {
        max = list[i]
    }
}
console.log(max)