//შექმენით სია სადაც იქნება სტრინგები. დააბრუნეთ ისეთი სტრინგები რომლებიც ხმოვნით იწყება
let list1 = ['nika', 'luka', 'mate', 'akaki', 'saba', 'ana', 'aleqsi']
let list2 = ['a', 'e', 'i', 'o', 'u']

let result = list1.filter((i) => {
    return list2.includes(i[0].toLowerCase())
})
console.log(result)