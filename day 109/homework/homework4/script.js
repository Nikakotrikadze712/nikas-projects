//შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. თუ ელემენტი number ტიპის მონაცემია მაშინ აიყვანეთ კვადრატში. თუ სტრინგია მაშინ შეაბრუნეთ და ისე დააბრუნეთ. სხვა შემთხვევაში როგორც არის ისე დააბრუნეთ.
let arr = [9, "gtr", true, 3, "r35", false]
let result = []

arr.forEach((item) => {
    if (typeof item === "number") {
        result.push (item * item)
    } else if (typeof item === "string") {
        result.push (item.split("").reverse ().join(""))
    } else {
        result.push (item)
    }
})

console.log (result)