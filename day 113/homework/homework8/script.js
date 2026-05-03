//შექმენი ფუნციადა გადაეცი ორი არგუმენტი a და b, ასევე დაამატე მეთოდები add() minus() რომელიც შეკრებსამ რიცხვებს და მეორე მეთოდი გამოაკლებს, შექმენი ობიექტებიდ ა შეინახე ცვლადებში,ამ ცვლადებზე(ანუ ობიექტებზე) გამოიძახეთ მეთოდები
function Calculator(a, b) {
    return {
        a: a,
        b: b,
        add() {
            return this.a + this.b
        },
        minus() {
            return this.a - this.b
        }
    }
}

let calc1 = Calculator(10, 5)
let calc2 = Calculator(20, 8)
let calc3 = Calculator(7, 3)

console.log(calc1.add())
console.log(calc1.minus())
console.log(calc2.add())
console.log(calc2.minus())
console.log(calc3.add())
console.log(calc3.minus())