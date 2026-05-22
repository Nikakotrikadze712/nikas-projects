//შექმენით სია სადაც იქნება მინიმუმ 15 ელემენტი სხვადასხვა მონაცემთა ტიპის. გადაუარეთ map-ით და თუ სტრინგია მაშინ lowercase-ად გადააქციეთ. თუ number-ია მაშინ აიყვანეთ კვადრატში იმ შემთხვევაში თუ ფესვი არ აქვს. სხვა შემთხვევაში დააბრუნეთ როგორც არის.
let items = [12, 'HELLo', 4, 'WORLD', 1, true, 'GOA', 9, 5, '45', '19', 0, false, 8, '21']

let result = items.map(item => {
    if (typeof item === "string") {
        return item.toLowerCase()
    }

    if (typeof item === "number") {
        let sqrt = Math.sqrt(item)

        if (!Number.isInteger(sqrt)) {
            return item * item
        }

        return item
    }

    return item
})

console.log(result)