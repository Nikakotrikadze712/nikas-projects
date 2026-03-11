//შექმენით ფუნქცია, სადაც არგუმენტად გადაეცემა ფუნქციას მომხმარებლის შემოტანილი რიცხვი. switch / case გამოყენებით . თუ ქულა არის
   //100 მაშინ დააბრუნეთ "საუკეთესო შედეგია, ყოჩაღ"
   //90-დან 100 შუალედში - A
   //80-დან 89 შუალედში  - B
   //70-დან 79 შუალედში  - C
   //55-დან 69 შუალედში - D
   //55 -ზე ნაკლებია მაშინ - F
   //სხვა შემთხვევაში "არასწორად შემოიტანეთ ქულა"
let number = Number(prompt('შეიყვანე შენი ქულა: '))

function grade () {
    switch (true) {
        case number === 100:
            console.log('საუკეთესო შედეგია, ყოჩაღ')
            break
        case number <= 100 && number >= 90:
            console.log('A')
            break
        case number <= 89 && number >= 80:
            console.log('B')
            break
        case number <= 79 && number >= 70:
            console.log('C')
            break
        case number <= 69 && number >= 55:
            console.log('D')
            break
        case number < 55:
            console.log('F')
            break
        default:
            console.log('არასწორად შემოიტანეთ ქულა.')
    }
}

grade(number)