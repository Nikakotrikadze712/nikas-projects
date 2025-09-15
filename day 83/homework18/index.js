let char1 = prompt("rock, paper, scissors,: ")
let char2 = prompt("rock, paper, scissors,: ")
if(char1 == char2) {
    console.log('draw')
}
else if (char1 == 'rock') {
    if(char2 == 'scissors') {
        console.log('player 1 win')
    }
    else{
        console.log('player 2 win')
    }
}
else if (char1 == 'paper') {
    if(char2 == 'rock') {
        console.log('player 1 win')
    }
    else{
        console.log('player 2 win')
    }
}
else if (char1 == 'scissors') {
    if(char2 == 'paper') {
        console.log('player 1 win')
    }
    else{
        console.log('player 2 win')
    }
}