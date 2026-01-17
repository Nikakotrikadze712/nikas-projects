//შექმენით სია, სადაც ეწერა ამ ჯგუფის მოსწავლეების სახელები.  დააჯგუფეთ ლუწ ინდექსზე მდგომი სახელები ცალკე და კენტ ინდექსზე მდგომი სახელები ცალკე.
let names = ['nika', 'aleqsandre', 'luka', 'wuwuna', 'zuka', 'iakobi', 'levani', 'gio']

let list1 = []
let list2 = []

for (let i = 0;i < names.length;i++) {
    if (i % 2 == 0) {
        list1.push(names[i])
    }
    else {
        list2.push(names[i])
    }
}

console.log(list1)
console.log(list2)