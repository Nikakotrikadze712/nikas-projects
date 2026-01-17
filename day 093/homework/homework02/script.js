//მოცემული გაქვთ სია: ['01001011100', '100111110', '110101010']. ამ სიის თითოეული ელემენტი არის ორობით სისტემაში. გადაიყვანეთ ათობითში და ჩაამატეთ ახალ სიაში.
let list = ['01001011100', '100111110', '110101010']

let index = []

for (let i = 0; i < list.length; i++) {
    let num = 0
    let num1 = list[i]
    for (let j = 0; j < num1.length; j++) {
        num = num * 2 + Number(num1[j])
    }
    index.push(num)
}

console.log(index)