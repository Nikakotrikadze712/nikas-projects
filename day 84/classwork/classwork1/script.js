let my_name = 'nika';
let user_name = prompt('enter your name: ');
let user_age = Number(prompt('enter your age: '));

if (my_name === user_name && user_age > 18) {
    console.log('we have same name and you are more than 18 yo');
} else if (user_age > 18 && my_name !== user_name) {
    console.log('We do not have same names but you are more than 18 yo');
} else {
    console.log('vin jandaba xar');
}