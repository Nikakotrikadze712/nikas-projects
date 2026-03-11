//შექმენით ცვლადი სადაც შეინახავთ რიცხვ 1000,  მომხმარებელს შემოატანინეთ სტატუსი, თუ შემოტანილი მნიშვნელობა არის სტუდენტი მაშინ 1000-ს დაუმატეთ 20%, სხვა შემთხვევაში 5%
let number = 1000
let status = prompt('enter status: ')
status === 'student' ? console.log(number + number * 0.2) : console.log(number + number * 0.05)