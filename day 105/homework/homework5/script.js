//შექმენი პროგრამა, სადაც მომხმარებელი შეიყვანს რიცხვს. ეს რიცხვი იქნება პაროლი. პროგრამამ უნდა დაითვალოს რამდენად ძლიერია მომხმარებლის მიერ შეყვანილი პაროლი. და შეამოწმოს ნამდვილად რიცხვი არის თუ არა. 1  . თუ შეყვანილი სიმბოლოების რაოდენობა მეტია ან ტოლი 6-ზე მაშინ +10  ქულა. თუ 3-6 შუალედშია სიმბოლოების რაოდენობა მაშინ 5 ქულა. სხვა შემთხვევაში 0. 2 . თუ ამ რიცხვის ციფრთა ჯამი მეტია 20-ზე მაშინ + 10 ქულა. თუ 15-20 შუალედშია მაშინ 5 ქულა. სხვა შემთხვევაში 0 ქულა. თუ ქულების საერთო ჯამი მეტი იქნება 15-ზე მაშინ დააბრუნეთ რომ "პაროლი არის ძლიერი". თუ 10-დან 15-მდეა მაშინ "საშუალო სირთულის" სხვა შემთხვევაში დააბრუნეთ "პაროლი სუსტია". (string-ად არ გადააქციოთ ეს რიცხვი და ისე არ გაიგთ ციფრთა ჯამი ან სიგრძე. გამოიყენეთ Math ობიექტი )
let password = Number(prompt('enter password(number): '))

let score = 0
let temp = password
let length = 0
let sum = 0

if (password >= 0 || password < 0) {
    while (temp > 0) {
        let digit = temp % 10
        sum = sum + digit
        temp = Math.floor(temp / 10)
        length = length + 1
    }

    if (length >= 6) {
        score = score + 10
    }
    else if (length >= 3 && length < 6) {
        score = score + 5
    }

    if (sum > 20) {
        score = score + 10
    }
    else if (sum >= 15 && sum <= 20) {
        score = score + 5
    }

    if (score > 15) {
        alert('password is strong')
    }
    else if (score >= 10 && score <= 15) {
        alert('average')
    }
    else {
        alert('password is weak')
    }

}
else {
    alert('enter numbers')
}