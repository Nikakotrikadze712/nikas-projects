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