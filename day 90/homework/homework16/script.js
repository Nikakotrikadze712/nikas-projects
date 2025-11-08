//შექმენით სია სადაც იქნება 10 ელემენტი. for და while loop-ების გამოყენებით გამოიტანეთ თითოეული ელემენტი .
let list = ['apple', 'banana', 'grape', 'orange', 'mango', 'peach', 'pear', 'kiwi', 'melon', 'cherry']

for(let i = 0; i < list.length; i++) {
    console.log(list[i])
}

console.log('===============================================================================')

let j = 0

while(j < list.length) {
    console.log(list[j])
    j++
}