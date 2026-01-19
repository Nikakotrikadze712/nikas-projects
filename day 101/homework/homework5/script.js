//შექმენით სია სადაც შეინახავთ მინიმუმ 5 ობიექტს და სცადეთ გამოიტანოთ თითოეული ობიექტში მყოფი სახელი  ცალცალკე for loop-ის გამოყენებით
let students = [
    {
        name: 'nika',
    },
    {
        name: 'luka',
    },
    {
        name: 'gio',   
    },
    {
        name: 'lika',
    },
    {
        name: 'daviti',
    }
]

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}