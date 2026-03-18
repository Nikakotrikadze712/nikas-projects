//შექმენით ფუნქცია, რომელსაც გადაეცემა ერთი სიმბოლო. switch / case გამოიყენეთ დაადგინეთ ეს სიმბოლო ასოა, რიცხვია თუ სხვა სიმბოლო.
let func1 = char => {
    switch (true) {
        case char >= "0" && char <= "9":
            return 'ციფრი'
            break
        case char.toLowerCase() !== char.toUpperCase():
            return 'ასო'
            break
        default:
            return "სხვა სიმბოლო"
    }
}

console.log (func1 ('a'))