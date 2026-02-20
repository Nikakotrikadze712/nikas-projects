//შექმენით ობიექტი, სადაც იქნება სია. სიაში უნდა იყოს სხვადასხვა ტიპის მონაცემები და მინიმუმ 10 ელემენტი. შიგნით შექმენით ისეთი მეთოდი რომელიც მხოლოდ Number ტიპის მონაცემებს გადაამრავლებს ერთმანეთზე.
let object = {
    items: [10, "hello", 5, true, 2, "world", false, 3, 9, 4],

    numbers: function() {
        let result = 1

        for (let i = 0; i < this.items.length; i++) {
            if (typeof this.items[i] === "number") {
                result = result * this.items[i]
            }
        }

        return result
    }
}

console.log(object.numbers())