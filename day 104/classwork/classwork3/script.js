//შექმენით ობიექტი სადაც იქნება აუცილებლად მოსწავლის სახელი, ასაკი, და ქულები რომლებიც სიაში ეწერება. ასევე შექმენით მეთოდი რომელიც გამოითვლის ქულების საშუალოს. და მეორე მეთოდი რომელიც მინიმალურ ქულას დააბრუნებს.
let student = {
    name: "Nika",
    age: 15,
    scores: [80, 75, 90, 60, 85],

    Average: function() {
        let sum = 0
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i]
        }
        let average = sum / this.scores.length
        return average
    },
    Min: function() {
        let min = this.scores[0]
        for (let i = 1; i < this.scores.length; i++) {
            if (this.scores[i] < min) {
                min = this.scores[i]
            }
        }
        return min
    }
}
console.log(student.Average())
console.log(student.Min())