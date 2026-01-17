//მომხმარებელს შემოატანინეთ სიტყვა. ეს სიტყვა ჩაამატეთ სიის თავში იმ შემთხვევაში თუ ეს სიტყვა არ არის ამ სიაში. სხვა შემთხვევაში თვითონ ეს სიტყვა შეაბრუნეთ და სიის ბოლოში ჩაამატეთ.
let list = ["apple", "banana", "orange", "grape", "mango"]
let word = prompt('enter fruits:')
if (!list.includes(word)) {
    list.unshift(word)
}
else {
    list.push(word)
}
console.log(list)