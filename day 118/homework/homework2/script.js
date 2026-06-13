//შექმენი სია სადაც იქნება მინიმუმ 20 რიცხვი. მოახდინეთ დესტრუქცია და პირველი სამი ელემენტი შეინახეთ ცალკე, დანარჩენები კი გაერთიანეთ.
let numbers = [5, 12, 8, 20, 3, 15, 7, 25, 10, 18, 2, 30, 14, 9, 22, 6, 11, 27, 4, 16]
let [first, second, third, ...others] = numbers

console.log(first)
console.log(second)
console.log(third)
console.log(others)