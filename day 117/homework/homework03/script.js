//შექმენით სია სადაც იქნება რიცხვები. თუ რიცხვი ლუწია მაშინ ჯამი გაამრავლეთ ამ რიცხვზე, თუ კენტია უბრალოდ მიუმატეთ და დააბრუნეთ შედეგი
let numbers = [2, 5, 4, 3, 6]
let result = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        result *= numbers[i]
    }
    else {
        result += numbers[i]
    }
}

console.log(result)