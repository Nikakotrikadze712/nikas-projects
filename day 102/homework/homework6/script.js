//შექმენით სია სადაც იქნება მინიმუმ 5 განსხვავებული ელემენტი. ზოგიერთი ელემენტი უნდა მეორდებოდეს. შემდეგ შექმენით ობიექტი სადაც ჩაამატებთ ამ ელემენტს როგორც key და მისი მნიშვნელობა იყოს რამდენჯერაც გვხვდება სიაში.
let list = [1, "bmw", true, 1, "gtr", false, true, "skyline"]

let object = {}

for (let item of list) {
  if (item in object) {
    object[item] = object[item] + 1
  }
  else {
    object[item] = 1
  }
}

console.log(object)
