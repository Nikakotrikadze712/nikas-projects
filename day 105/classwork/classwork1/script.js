//შექმენით  ობიექტი, რომელშიც იქნება მოსწავლის ინფორმაცია. შემდეგ for in-ის გამოყენებით გადაუარეთ პირველ ობიექტს. და თითოეული სტრინგი გადაამრავლეთ რენდომ რიცხვზე 1-დან 5-მდე და ისე გამოიტანეთ კონსოლში.
let object = {
    name: 'nika',
    surname: 'kotrikadze'
}

for (let i in object) {
    let num = Math.floor(Math.random() * 5) +1
    let result = ''
    for (let j = 0;j < num;j++) {
        result += object[i]
    }
    console.log(result)
}