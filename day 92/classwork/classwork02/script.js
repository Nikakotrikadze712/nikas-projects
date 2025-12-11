//შექმენი რიცხვების სია ამ სიიდან ყველა ლუწი რიცხვი გადაიტანე ახალ სიაში
let list1 = [1, 2, 3, 4, 5, 6]
let list2 = []
for(let i = 0;i < list1.length;i++) {
    if(list2[i] %2 === 0) {
        list2.push(list1[i])
    }
}
console.log(list2)