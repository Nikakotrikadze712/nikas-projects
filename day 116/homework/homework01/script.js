//for loop - ის გამოყენებით 50-მდე ყველა ლუწი რიცხვი შეკრიბეთ და გადაამრავლეთ კენტების ჯამზე.
let Even = 0
let Odd = 0
for (let i = 1; i <= 50; i++) {
    if (i %2 === 0) {
        Even += i
    }
    else {
        Odd += i
    }
}

console.log (Even * Odd)