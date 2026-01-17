//მოცემული გაქვთ სია, [10, 20, 30, 100, 40, 'Goa' ]. მომხმარებელს შემოატანინეთ ტექსტი და შეამოწმეთ არის თუ არა ეს ტექსტი ამ სიაში.
let list = [10, 20, 30, 100, 40, 'Goa']
let input = prompt('enter text or number:')
if (list.includes(input)) {
    console.log('this text is in the list')
}
else {
    console.log('this text is not in the list')
}