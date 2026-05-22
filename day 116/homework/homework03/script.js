//შექმენით ცვლადი სადაც შეინახავთ რიცხვს. თქვენი მიზანია ეს რიცხვი შეაბრუნოთ და ისე დააბრუნოთ შედეგი.
let num = 12345
let str = ''
for (let i = String(num).length -1; i >= 0; i--) {
    str += String (num)[i]
}

console.log (str)