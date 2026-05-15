//შექმენი ობიექი რომელშიც იქნება მხოლოდ name  შენი დავალებაა დაამატო ამ ობიექტშში გარედან author , year და amount შემდეგ შეამოწმე არის თუ არა ობიექტში key სახელად name  ასევე შემაოწმე არის თუ არა ობიექტშში key სახელად color
const book = {
    name: 'Harry Potter'
}

book.author = 'J.K. Rowling'
book.year = 1997
book.amount = 500

console.log(book.hasOwnProperty('name'))
console.log(book.hasOwnProperty('color'))